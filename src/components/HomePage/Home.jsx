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
      <div>
        <div>
          <h1 className="flex justify-center text-5xl mt-16">Welcome HP</h1>
          <div className="flex justify-center text-2xl mt-6">
            Help Presentation
          </div>
        </div>
        {isModal && <Modal setIsModal={setIsModal} />}
        <div className="flex justify-center mt-10">
          <div className="flex justify-center items-center gap-20">
            {pdfUrl && (
              <div className="border-4 rounded-xl bg-[#f9fafb] border-primary">
                <div className="mt-10 mr-10 ml-20 mb-10">
                  <DocumentViewer pdfUrl={pdfUrl} />
                </div>
              </div>
            )}
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="flex flex-col gap-36">
                <div>
                  <FileUpload />
                </div>
                <div className="flex justify-center">
                  {pdfUrl && (
                    <Button
                      onClickEvent={handlePresentationMode}
                      title={buttonTitle}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
