import PropTypes from "prop-types";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function SlideViewer({ pdfURL, numPages, setNumPages, slideNumber }) {
  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="justify-center flex">
        <div className="justify-center w-[1000px] h-[200px] overflow-hidden">
          <div>
            <Document
              file={pdfURL}
              onLoadSuccess={onLoadSuccess}
              className="flex gap-x-10"
            >
              {Array(numPages)
                .fill(null)
                .map((_, index) => {
                  return (
                    index < 8 && (
                      <div key={index}>
                        <Page
                          key={index}
                          pageNumber={slideNumber + index}
                          width="150"
                          className="border-2"
                        />
                      </div>
                    )
                  );
                })}
            </Document>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideViewer;

SlideViewer.propTypes = {
  pdfURL: PropTypes.string.isRequired,
  numPages: PropTypes.number.isRequired,
  setNumPages: PropTypes.func.isRequired,
  slideNumber: PropTypes.number.isRequired,
};
