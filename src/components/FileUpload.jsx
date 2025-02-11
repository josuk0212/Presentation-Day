import { useState } from "react";

import DocumentViewer from "./DocumentViewer";

function FileUpload() {
  const [pdfURL, setPdfURL] = useState("");

  function handleFileChange(event) {
    const file = Array.from(event.target.files);

    if (file[0]) {
      const fileURL = URL.createObjectURL(file[0]);
      setPdfURL(fileURL);
    }
  }

  return (
    <>
      <input
        type="file"
        accept="image/*, .pdf"
        onChange={handleFileChange}
      />
      {pdfURL && <DocumentViewer pdfURL={pdfURL} />}
    </>
  );
}

export default FileUpload;
