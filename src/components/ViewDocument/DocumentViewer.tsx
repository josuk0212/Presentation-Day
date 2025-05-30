import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import useOnOffStore from "../../stores/useOnOffStore";
import Drawing from "../PresentationMode/Canvas";
import CursorPointer from "../PresentationMode/CursorPointer";
import SlideViewer from "./SlideViewer";

interface DocumentViewerProps {
  pdfUrl: string;
  getCursorCoordinate?: (event: React.MouseEvent) => void;
}

interface PdfSize {
  width: number;
  height: number;
}

interface LoadSuccess {
  numPages: number;
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function DocumentViewer({
  pdfUrl,
  getCursorCoordinate,
}: DocumentViewerProps): React.ReactElement {
  const [totalPageNumber, setTotalPageNumber] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [moveIndex, setMoveIndex] = useState<number>(0);
  const [pdfSize, setPdfSize] = useState<PdfSize>({ width: 0, height: 0 });
  const { isFullScreen } = useOnOffStore();
  const pdfRef = useRef<HTMLCanvasElement>(null);

  const documentViewerChannel = useMemo(() => {
    const channel = new BroadcastChannel("path");
    channel.postMessage([pageNumber, moveIndex, totalPageNumber]);
    return channel;
  }, [pageNumber, moveIndex, totalPageNumber]);

  useEffect(() => {
    documentViewerChannel.onmessage = (shareState: MessageEvent): void => {
      const [newPageNumber, newMoveIndex] = shareState.data as [number, number];
      setPageNumber(newPageNumber);
      setMoveIndex(newMoveIndex);
    };
  }, [documentViewerChannel]);

  function onLoadSuccess({ numPages }: LoadSuccess): void {
    setTotalPageNumber(numPages);
  }

  function getPdfSize(page: { width: number; height: number }): void {
    setPdfSize({ width: page.width, height: page.height });
  }

  function handlePreviousPage(): void {
    if (pageNumber === 1) {
      return;
    } else {
      setPageNumber(pageNumber - 1);
    }

    if (moveIndex === 0) {
      return;
    } else {
      pageNumber % 5 === 1 && setMoveIndex((prev) => prev + 1050);
    }
  }

  function handleNextPage(): void {
    if (pageNumber === totalPageNumber) {
      return;
    } else {
      setPageNumber(pageNumber + 1);
    }
    pageNumber % 5 === 0 && setMoveIndex((prev) => prev - 1050);
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (event.key === "ArrowLeft") {
      handlePreviousPage();
    } else if (event.key === "ArrowRight") {
      handleNextPage();
    }
  }

  useEffect(() => {
    addEventListener("keydown", handleKeyDown);
    return () => removeEventListener("keydown", handleKeyDown);
  }, [pageNumber]);

  function handleChangeLoadingText(): string {
    return "Loading...";
  }

  return (
    <>
      <div className="flex justify-center">
        <div
          id="view-document"
          onMouseMove={getCursorCoordinate}
          className="flex justify-center border-2 w-min h-min border-primary"
        >
          <div
            className="m-auto"
            style={{
              width: `${pdfSize.width}px`,
              height: `${pdfSize.height}px`,
            }}
          >
            <Document
              file={pdfUrl}
              onLoadSuccess={onLoadSuccess}
              loading={handleChangeLoadingText}
            >
              <Drawing pdfRef={pdfRef} />
              <Page
                canvasRef={pdfRef}
                onLoadSuccess={getPdfSize}
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={
                  <div
                    className="bg-white"
                    style={{
                      width: `${pdfSize.width}px`,
                      height: `${pdfSize.height}px`,
                    }}
                  ></div>
                }
                scale={isFullScreen ? 1 : 0.5}
              />
            </Document>
            {isFullScreen && <CursorPointer pdfRef={pdfRef} />}
          </div>
        </div>
      </div>
      {totalPageNumber !== 1 && (
        <div className="flex justify-center mt-5">
          <div className="flex items-center mr-10">
            <button
              className="btn btn-ghost text-2xl"
              onClick={handlePreviousPage}
            >
              ←
            </button>
          </div>
          <div className="flex w-[1050px] overflow-hidden">
            <div style={{ transform: `translateX(${moveIndex}px)` }}>
              <SlideViewer
                pdfUrl={pdfUrl}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="btn btn-ghost text-2xl"
              onClick={handleNextPage}
            >
              →
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-2">
        {pageNumber} / {totalPageNumber} Page
      </div>
    </>
  );
}

export default DocumentViewer;
