import useFileStore from "../../stores/useFileStore";

function FileUpload() {
  const { setPdfUrl } = useFileStore();

  function handleFileChange(event) {
    const file = Array.from(event.target.files);
    const pdfUrl = URL.createObjectURL(file[0]);

    if (file[0]) {
      setPdfUrl(pdfUrl);
      localStorage.setItem("pdfUrl", pdfUrl);
    }
  }

  return (
    <>
      <label className="flex items-center justify-center w-full max-w-xs h-44 border-2 border-dashed rounded-md">
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
