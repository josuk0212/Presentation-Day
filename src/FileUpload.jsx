import { useState } from "react";

function FileUpload() {
  const [showFile, setShowFile] = useState([]); // eslint-disable-line no-unused-vars

  function handleFileChange(event) {
    const file = Array.from(event.target.files);

    if (file[0]) {
      const fileURL = URL.createObjectURL(file[0]);
      setShowFile(fileURL);
    }
  }

  return (
    <input
      type="file"
      accept="image/*, .pdf"
      onChange={handleFileChange}
    />
  );
}

export default FileUpload;
