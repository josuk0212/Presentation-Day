import PropTypes from "prop-types";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function SlideViewer({ pdfUrl, pageNumber, setPageNumber }) {
  const [totalPageNumber, setTotalPageNumber] = useState(null);

  function onLoadSuccess({ numPages }) {
    setTotalPageNumber(numPages);
  }

  function handleMovePage(_, info) {
    setPageNumber(info._pageIndex + 1);
  }

  return (
    <>
      <div className="justify-center flex">
        <Document
          file={pdfUrl}
          onLoadSuccess={onLoadSuccess}
          loading={false}
          className="flex gap-x-14"
        >
          {Array(totalPageNumber)
            .fill(null)
            .map((_, index) => {
              return (
                index <= totalPageNumber && (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width="150"
                    className={
                      index + 1 === pageNumber
                        ? "border-8 rounded-xl border-primary"
                        : "border-2 rounded"
                    }
                    onClick={handleMovePage}
                  />
                )
              );
            })}
        </Document>
      </div>
    </>
  );
}

export default SlideViewer;

SlideViewer.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
  setPageNumber: PropTypes.func.isRequired,
};
