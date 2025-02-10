import PropTypes from "prop-types";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function DocumentViewer({ pdfURL }) {
  const [totalPageNumber, setTotalPageNumber] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // eslint-disable-line no-unused-vars

  function onLoadSuccess({ totalPageNumber }) {
    setTotalPageNumber(totalPageNumber);
  }

  return (
    <div className="flex justify-center">
      <Document
        file={pdfURL}
        onLoadSuccess={onLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        Page {pageNumber} of {totalPageNumber}
      </div>
    </div>
  );
}

export default DocumentViewer;

DocumentViewer.propTypes = {
  pdfURL: PropTypes.string.isRequired,
};
