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
    <div
      className="w-full min-h-screen bg-primary"
      style={{
        backgroundImage: `
          radial-gradient(at 10% 0%, rgba(160, 180, 255, 0.35) 0%, transparent 50%),
          radial-gradient(at 90% 20%, rgba(187, 222, 251, 0.3) 0%, transparent 60%),
          radial-gradient(at 50% 100%, rgba(221, 214, 254, 0.25) 0%, transparent 50%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center py-20 text-center">
        <h1 className="text-6xl font-extrabold text-white mb-6">
          Presentation Day
        </h1>
        <p className="text-2xl text-gray-300 font-normal">
          PDF로 쉽고 빠르게, 발표를 준비하고 완성하세요.
        </p>
      </div>

      {isModal && <Modal setIsModal={setIsModal} />}

      <div className="flex justify-center items-start gap-20 px-4 py-20">
        {!pdfUrl && (
          <div className="max-w-md text-white space-y-6">
            <h2 className="text-3xl font-bold">사용 방법 안내</h2>
            <p className="text-lg text-gray-300">
              PDF 파일을 업로드하고, 발표자 모드 버튼을 눌러보세요.
            </p>
            <ol className="list-decimal list-inside space-y-4 text-base text-gray-200">
              <li>파일을 선택하거나 드래그하여 업로드합니다.</li>
              <li>
                파일의 내용을 확인 후 “Go to Presentation!” 버튼을 클릭합니다.
              </li>
              <li>새 페이지가 열리면, 다른 기기로 이동 후 사용해주세요.</li>
              <li>
                발표자 모드에서 메모, 타이머, 드로잉 기능을 사용할 수 있습니다.
              </li>
            </ol>
          </div>
        )}
        <div className="flex items-center gap-4">
          {pdfUrl && (
            <div className="flex-1 bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-10 min-w-0">
              <DocumentViewer pdfUrl={pdfUrl} />
            </div>
          )}
          <div className="w-[400px] flex-shrink-0 bg-third border border-[#d1d5db] rounded-xl shadow-lg p-2 flex flex-col items-center gap-10">
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
    </div>
  );
}

export default Home;
