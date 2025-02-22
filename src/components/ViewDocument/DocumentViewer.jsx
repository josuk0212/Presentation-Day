import PropTypes from "prop-types";
import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import useOnOffStore from "../../stores/useOnOffStore";
import Drawing from "../PresentationMode/Canvas";
import CursorPointer from "../PresentationMode/CursorPointer";
import SlideViewer from "./SlideViewer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function DocumentViewer({ pdfUrl, getCursorCoordinate }) {
  const [totalPageNumber, setTotalPageNumber] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [moveIndex, setMoveIndex] = useState(0);
  const { isOpenSpeakerPage, isFullScreen } = useOnOffStore();
  const pdfRef = useRef(null);

  const documentViewerChannel = useMemo(() => {
    const channel = new BroadcastChannel("path");
    channel.postMessage([pageNumber, moveIndex, totalPageNumber]);
    return channel;
  }, [pageNumber, moveIndex, totalPageNumber]);

  useEffect(() => {
    documentViewerChannel.onmessage = (shareState) => {
      setPageNumber(shareState.data[0]);
      setMoveIndex(shareState.data[1]);
    };
  }, [documentViewerChannel]);

  function onLoadSuccess({ totalPageNumber }) {
    setTotalPageNumber(totalPageNumber);
  }

  function handlePreviousPage() {
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

  function handleNextPage() {
    if (pageNumber === totalPageNumber) {
      return;
    } else {
      setPageNumber(pageNumber + 1);
    }
    pageNumber % 5 === 0 && setMoveIndex((prev) => prev - 1050);
  }

  function handleKeyDown(event) {
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

  function handleChangeLoadingText() {
    const loadingText = "Loding...";
    return loadingText;
  }

  return (
    <>
      <div className="flex justify-center">
        <div
          id="view-document"
          onMouseMove={getCursorCoordinate}
          className="flex justify-center w-min h-min"
        >
          <Document
            file={pdfUrl}
            onLoadSuccess={onLoadSuccess}
            loading={handleChangeLoadingText}
            className="m-auto border-2 border-primary"
          >
            <Drawing pdfRef={pdfRef} />
            <Page
              canvasRef={pdfRef}
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              scale={isFullScreen ? 1 : 0.5}
            />
          </Document>
          {isOpenSpeakerPage && <CursorPointer pdfRef={pdfRef} />}
        </div>
      </div>
      {totalPageNumber !== 1 && (
        <div className="flex justify-center mt-5">
          <div className="flex items-center mr-3">
            <button
              className="btn btn-ghost text-2xl"
              onClick={handlePreviousPage}
            >
              ←
            </button>
          </div>
          <div className="flex w-[1020px] overflow-hidden">
            <div style={{ transform: `translateX(${moveIndex}px)` }}>
              <SlideViewer
                pdfUrl={pdfUrl}
                totalPageNumber={totalPageNumber}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                setTotalPageNumber={setTotalPageNumber}
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

DocumentViewer.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  getCursorCoordinate: PropTypes.func.isRequired,
};
