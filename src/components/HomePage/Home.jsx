import { useState } from "react";

import useFileStore from "../../stores/useFileStore";
import FileUpload from "../FileUpload/FileUpload";
import Modal from "../PresentationMode/Modal";
import PresentationButton from "../PresentationMode/PresentationButton";
import DocumentViewer from "../ViewDocument/DocumentViewer";

function Home() {
  const [isModal, setIsModal] = useState(false);
  const { pdfUrl } = useFileStore();

  function handlePresentationMode() {
    setIsModal(true);
  }

  return (
    <>
      <h1 className="flex justify-center text-5xl mt-16">Welcome HP</h1>
      <div className="flex justify-center text-2xl mt-6">Help Presentation</div>
      <FileUpload />
      {pdfUrl && <DocumentViewer pdfUrl={pdfUrl} />}
      <PresentationButton onClickEvent={handlePresentationMode} />
      {isModal && <Modal />}
    </>
  );
}

export default Home;
