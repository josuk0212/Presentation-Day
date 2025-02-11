import PropTypes from "prop-types";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function SlideViewer({
  pdfURL,
  numPages,
  pageNumber,
  setPageNumber,
  setNumPages,
}) {
  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function handleMovePage(event, info) {
    setPageNumber(info._pageIndex + 1);
  }

  return (
    <>
      <div className="justify-center flex">
        <Document
          file={pdfURL}
          onLoadSuccess={onLoadSuccess}
          className="flex gap-x-14"
        >
          {Array(numPages)
            .fill(null)
            .map((_, index) => {
              return (
                index < 5 && (
                  <Page
                    key={index}
                    pageNumber={pageNumber + index}
                    width="150"
                    className={
                      index === 0 ? "border-8 border-primary" : "border-2"
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
  pdfURL: PropTypes.string.isRequired,
  numPages: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  setNumPages: PropTypes.func.isRequired,
};
