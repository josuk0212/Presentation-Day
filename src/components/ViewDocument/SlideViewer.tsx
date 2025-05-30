import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface SlideViewerProps {
  pdfUrl: string;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
}

interface LoadSuccess {
  numPages: number;
}

function SlideViewer({
  pdfUrl,
  pageNumber,
  setPageNumber,
}: SlideViewerProps): React.ReactElement {
  const [totalPageNumber, setTotalPageNumber] = useState<number | null>(null);

  function onLoadSuccess({ numPages }: LoadSuccess): void {
    setTotalPageNumber(numPages);
  }

  const handleMovePage = (page: number | undefined): void => {
    if (page) {
      setPageNumber(page);
    }
  };

  return (
    <>
      <div className="justify-center flex">
        <Document
          file={pdfUrl}
          onLoadSuccess={onLoadSuccess}
          loading={false}
          className="flex gap-x-14"
        >
          {totalPageNumber &&
            Array(totalPageNumber)
              .fill(null)
              .map((_, index) => {
                return (
                  index <= totalPageNumber && (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      width={150}
                      className={
                        index + 1 === pageNumber
                          ? "border-8 rounded-xl border-primary"
                          : "border-2 rounded"
                      }
                      onClick={() => handleMovePage(index + 1)}
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
