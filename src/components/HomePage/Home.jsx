import { useState } from "react";

import FileUpload from "../FileUpload/FileUpload";
import Modal from "../PresentationMode/Modal";
import PresentationButton from "../PresentationMode/PresentationButton";

function Home() {
  const [isModal, setIsModal] = useState(false);
  function handlePresentationMode() {
    setIsModal(true);
  }

  return (
    <>
      <h1 className="flex justify-center text-5xl mt-16">Welcome HP</h1>
      <div className="flex justify-center text-2xl mt-6">Help Presentation</div>
      <FileUpload />
      <PresentationButton onClickEvent={handlePresentationMode} />
      {isModal && <Modal />}
    </>
  );
}

export default Home;
