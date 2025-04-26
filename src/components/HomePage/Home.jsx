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
      <div className="flex flex-col justify-center items-center h-48 bg-primary text-center">
        <h1 className="text-white text-5xl font-bold">Presentation Day</h1>
        <p className="text-white text-lg mt-2">
          PDF로 쉽고 빠르게, 발표를 준비하고 완성하세요.
        </p>
      </div>
      {isModal && <Modal setIsModal={setIsModal} />}
      <div className="flex justify-center items-center gap-20 py-12">
        {pdfUrl && (
          <div className="bg-white rounded-2xl shadow-lg border border-primary p-8">
            <DocumentViewer pdfUrl={pdfUrl} />
          </div>
        )}
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-12 gap-10 w-[400px]">
          <FileUpload />
          {pdfUrl && (
            <BlackButton
              onClickEvent={handlePresentationMode}
              title={buttonTitle}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
