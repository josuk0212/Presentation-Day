import { useState } from "react";

import useFileStore from "../../stores/useFileStore";
import useOnOffStore from "../../stores/useOnOffStore";
import FileUpload from "../FileUpload/FileUpload";
import Modal from "../PresentationMode/Modal";
import Button from "../Share/Button";
import DocumentViewer from "../ViewDocument/DocumentViewer";

function Home() {
  const [isModal, setIsModal] = useState(false);
  const { pdfUrl } = useFileStore();
  const { setIsOpenSpeakerpage } = useOnOffStore();

  const buttonTitle = "Go to Presentation!";

  function handlePresentationMode() {
    setIsModal(true);
    setIsOpenSpeakerpage(true);
    window.open("http://localhost:5173/Speaker");
  }

  return (
    <>
      <h1 className="flex justify-center text-5xl mt-16">Welcome HP</h1>
      <div className="flex justify-center text-2xl mt-6">Help Presentation</div>
      {isModal && <Modal setIsModal={setIsModal} />}
      <FileUpload />
      {pdfUrl && <DocumentViewer pdfUrl={pdfUrl} />}
      <Button
        onClickEvent={handlePresentationMode}
        title={buttonTitle}
      />
    </>
  );
}

export default Home;
