import PropTypes from "prop-types";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function SlideViewer({ pdfURL, numPages, pageNumber, setNumPages }) {
  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
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
  setNumPages: PropTypes.func.isRequired,
};
