import PropTypes from "prop-types";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import SlideViewer from "./SlideViewer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function DocumentViewer({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [moveIndex, setMoveIndex] = useState(0);

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
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
    if (pageNumber === numPages) {
      return;
    } else {
      setPageNumber(pageNumber + 1);
    }
    pageNumber % 5 === 0 && setMoveIndex((prev) => prev - 1050);
  }

  function handleChangeLoadingText() {
    const loadingText = "Loding...";
    return loadingText;
  }

  return (
    <>
      <div className="flex justify-center">
        <Document
          file={pdfUrl}
          onLoadSuccess={onLoadSuccess}
          loading={handleChangeLoadingText}
        >
          <Page
            pageNumber={pageNumber}
            width="400"
            className="border-2"
          />
        </Document>
      </div>
      <div className="flex justify-center">
        Page {pageNumber} of {numPages}
      </div>
      {numPages !== 1 && (
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
                numPages={numPages}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                setNumPages={setNumPages}
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
};
