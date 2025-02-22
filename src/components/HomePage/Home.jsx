import { useState } from "react";

import useFileStore from "../../stores/useFileStore";
import useOnOffStore from "../../stores/useOnOffStore";
import FileUpload from "../FileUpload/FileUpload";
import Modal from "../PresentationMode/Modal";
import DocumentViewer from "../ViewDocument/DocumentViewer";

function Home() {
  const [isModal, setIsModal] = useState(false);
  const { pdfUrl } = useFileStore();
  const { setIsOpenSpeakerpage } = useOnOffStore();

  function handlePresentationMode() {
    setIsModal(true);
    setIsOpenSpeakerpage(true);
    window.open("http://localhost:5173/Speaker");
  }

  return (
    <>
      <div className="w-screen h-screen bg-background">
        <div className="flex flex-col justify-center items-center h-44 bg-primary">
          <h1 className="text-white text-5xl">Welcome HP</h1>
          <div className="text-white text-2xl">Help Presentation</div>
        </div>
        {isModal && <Modal setIsModal={setIsModal} />}
        <div className="flex justify-center mt-5">
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
                    <button
                      onClick={handlePresentationMode}
                      className="btn btn-outline border-stone-900"
                    >
                      Go to Presentation!
                    </button>
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
