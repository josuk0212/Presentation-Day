import { useState } from "react";

import useFileStore from "../../stores/useFileStore";
import useOnOffStore from "../../stores/useOnOffStore";
import FileUpload from "../FileUpload/FileUpload";
import Modal from "../PresentationMode/Modal";
import { BlackButton } from "../Share/Button";
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
    <div className="w-screen h-screen bg-background">
      <div className="flex justify-center items-center h-36 bg-primary">
        <h1 className="text-white text-5xl">Presentation Day</h1>
      </div>
      {isModal && <Modal setIsModal={setIsModal} />}
      <div className="flex justify-center items-center w-full h-full bg-background">
        <div>
          <div className="flex items-center gap-20">
            {pdfUrl && (
              <div className="border-4 rounded-xl bg-white border-primary">
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
                    <BlackButton
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
    </div>
  );
}

export default Home;
