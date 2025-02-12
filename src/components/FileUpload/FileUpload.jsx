import useFileStore from "../../stores/useFileStore";

function FileUpload() {
  const { setPdfUrl } = useFileStore();

  function handleFileChange(event) {
    const file = Array.from(event.target.files);

    if (file[0]) {
      setPdfUrl(URL.createObjectURL(file[0]));
    }
  }

  return (
    <>
      <input
        type="file"
        accept="image/*, .pdf"
        onChange={handleFileChange}
        className="file-input file-input-bordered file-input-sm w-full max-w-xs"
      />
    </>
  );
}

export default FileUpload;
