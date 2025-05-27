import { FilePlus } from "lucide-react";
import { ChangeEvent, DragEvent, useState } from "react";

import useFileStore from "../../stores/useFileStore";

function FileUpload() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { setPdfUrl } = useFileStore();

  function fileUpload(file: File | null): void {
    if (!file) {
      return;
    }

    const pdfUrl = URL.createObjectURL(file);
    setPdfUrl(pdfUrl);
    localStorage.setItem("pdfUrl", pdfUrl);
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>): void {
    const file = event.target.files?.[0] || null;
    fileUpload(file);
  }

  function handleDragOver(event: DragEvent<HTMLLabelElement>): void {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(event: DragEvent<HTMLLabelElement>): void {
    event.preventDefault();
    setIsDragging(false);
  }

  function handleDropFile(event: DragEvent<HTMLLabelElement>): void {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0] || null;
    fileUpload(file);
  }

  return (
    <>
      <label
        className={`flex flex-col items-center justify-center w-full max-w-md h-64 gap-4 border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all duration-300 ease-in-out ${
          isDragging
            ? "border-blue-400 bg-blue-50 shadow-lg"
            : "border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50"
        }`}
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
        <div className="bg-blue-100 p-3 rounded-full transition-all duration-300">
          <FilePlus className="w-10 h-10 text-blue-500" />
        </div>
        <div>
          <p className="text-gray-700 font-semibold">
            파일을 드래그하거나 선택해서 업로드하세요.
          </p>
        </div>
      </label>
    </>
  );
}

export default FileUpload;
