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

function DocumentViewer({ pdfURL }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handlePreviousPage() {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber(pageNumber - 1);
  }

  function handleNextPage() {
    if (pageNumber === numPages) {
      return;
    }
    setPageNumber(pageNumber + 1);
  }

  return (
    <>
      <div className="flex justify-center">
        <Document
          file={pdfURL}
          onLoadSuccess={onLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            width="400"
            className="border-2"
          />
        </Document>
        <div>
          Page {pageNumber} of {numPages}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="btn btn-outline"
          onClick={handlePreviousPage}
        >
          이전
        </button>
        <SlideViewer
          pdfURL={pdfURL}
          numPages={numPages}
          pageNumber={pageNumber}
          setNumPages={setNumPages}
        />
        <button
          className="btn btn-outline"
          onClick={handleNextPage}
        >
          다음
        </button>
      </div>
    </>
  );
}

export default DocumentViewer;

DocumentViewer.propTypes = {
  pdfURL: PropTypes.string.isRequired,
};
