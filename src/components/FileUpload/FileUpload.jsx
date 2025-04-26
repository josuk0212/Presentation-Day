import useFileStore from "../../stores/useFileStore";

function FileUpload() {
  const { setPdfUrl } = useFileStore();

  function fileUpload(file) {
    if (!file) {
      return;
    }

    const pdfUrl = URL.createObjectURL(file);
    setPdfUrl(pdfUrl);
    localStorage.setItem("pdfUrl", pdfUrl);
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    fileUpload(file);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDragLeave(event) {
    event.preventDefault();
  }

  function handleDropFile(event) {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    fileUpload(file);
  }

  return (
    <>
      <label
        className="flex items-center justify-center w-full max-w-xs h-44 border-2 border-dashed rounded-md"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDropFile}
      >
        <input
          type="file"
          accept="image/*, .pdf"
          onChange={handleFileChange}
          className="hidden"
        />
        <span className="text-gray-500">
          파일을 드래그하거나 클릭해서 업로드하세요.
        </span>
      </label>
    </>
  );
}

export default FileUpload;
