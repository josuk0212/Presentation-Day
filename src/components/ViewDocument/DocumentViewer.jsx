import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import useOnOffStore from "../../stores/useOnOffStore";
import SlideViewer from "./SlideViewer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function DocumentViewer({ pdfUrl, getCursorCoordinate }) {
  const [totalPageNumber, setTotalPageNumber] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [moveIndex, setMoveIndex] = useState(0);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const { isFullScreen } = useOnOffStore();

  const documentViewerChannel = useMemo(() => {
    const channel = new BroadcastChannel("path");
    channel.postMessage([pageNumber, moveIndex]);
    return channel;
  }, [pageNumber, moveIndex]);

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

  const coordX = localStorage.getItem("coordX");
  const coordY = localStorage.getItem("coordY");

  addEventListener("storage", () => {
    setCoordinate({ x: coordX, y: coordY });
  });

  function handleChangeLoadingText() {
    const loadingText = "Loding...";
    return loadingText;
  }

  return (
    <>
      <div
        id="view-document"
        onMouseMove={getCursorCoordinate}
        className="flex justify-center w-min h-min"
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={onLoadSuccess}
          loading={handleChangeLoadingText}
          className="m-auto border-2"
        >
          <Page
            pageNumber={pageNumber}
            scale={isFullScreen ? "1.5" : "0.5"}
          />
        </Document>
        {isFullScreen && (
          <div
            style={{
              position: "absolute",
              width: "2rem",
              height: "2rem",
              background: "red",
              left: `${coordinate.x - 15}px`,
              top: `${coordinate.y - 15}px`,
            }}
          ></div>
        )}
      </div>
      <div className="flex justify-center">
        Page {pageNumber} of {totalPageNumber}
      </div>
      {totalPageNumber !== 1 && (
        <div className="flex justify-center">
          <button
            className="btn btn-outline"
            onClick={handlePreviousPage}
          >
            이전
          </button>
          <div className="flex w-[1010px] overflow-hidden">
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
          <button
            className="btn btn-outline"
            onClick={handleNextPage}
          >
            다음
          </button>
        </div>
      )}
    </>
  );
}

export default DocumentViewer;

DocumentViewer.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  getCursorCoordinate: PropTypes.func.isRequired,
};
