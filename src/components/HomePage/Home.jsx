import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

import useFileStore from "../../stores/useFileStore";
import useOnOffStore from "../../stores/useOnOffStore";
import FileUpload from "../FileUpload/FileUpload";
import Modal from "../PresentationMode/Modal";
import { BlackButton } from "../Share/Button";
import DocumentViewer from "../ViewDocument/DocumentViewer";

function Home() {
  const [isModal, setIsModal] = useState(false);
  const { pdfUrl } = useFileStore();
  const { setIsFullScreen } = useOnOffStore();

  const navigate = useNavigate();
  const buttonTitle = "Go to Presentation!";

  useEffect(() => {
    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }

    if (isMobile()) {
      navigate("/Mobile");
    }
  }, [navigate]);

  function handlePresentationMode() {
    setIsModal(true);
    window.open("https://presentation-day.today/Speaker");
  }

  const finishPresentationChannel = useMemo(() => {
    const channel = new BroadcastChannel("finish");
    return channel;
  }, []);

  useEffect(() => {
    finishPresentationChannel.onmessage = (shareState) => {
      if (shareState.data) {
        setIsModal(false);
        setIsFullScreen(false);
        document.exitFullscreen();
      }
    };
  }, [finishPresentationChannel]);

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
