import useOnOffStore from "../../stores/useOnOffStore";
import Memo from "../PresentationMode/Memo";
import Timer from "../PresentationMode/Timer";
import { WhiteButton } from "../Share/Button";
import DocumentViewer from "../ViewDocument/DocumentViewer";

function SpeakerPage() {
  const {
    isDisplayDrawing,
    isCloseSpeakerPage,
    setIsDisplayDrawing,
    setIsClearDrawing,
    setIsCloseSpeakerPage,
  } = useOnOffStore();
  const pdfUrl = localStorage.getItem("pdfUrl");

  const finishPresentationChannel = new BroadcastChannel("finish");
  finishPresentationChannel.postMessage(isCloseSpeakerPage);

  const drawButtonTitle = ["🖍️", "🧽"];
  const closeButtonTitle = "X";

  function getCursorCoordinate(event) {
    const coordX = event.nativeEvent.offsetX;
    const coordY = event.nativeEvent.offsetY;

    localStorage.setItem("coordX", coordX);
    localStorage.setItem("coordY", coordY);
  }

  function handleDrawingToggle() {
    if (!isDisplayDrawing) {
      setIsDisplayDrawing(true);
    } else {
      setIsDisplayDrawing(false);
    }
  }

  function handleClearDrawing() {
    setIsClearDrawing(true);
  }

  function handleCloseSpeakerPage() {
    setIsCloseSpeakerPage(true);
    window.close();
  }

  return (
    <div className="w-screen h-screen bg-primary overflow-hidden">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex h-[90vh]">
          <div className="flex flex-col justify-start">
            <div className="flex items-center justify-between px-4 pt-2 pb-1">
              <Timer />
              <div className="flex ml-auto gap-4">
                <WhiteButton
                  onClickEvent={handleDrawingToggle}
                  title={drawButtonTitle[0]}
                />
                <WhiteButton
                  onClickEvent={handleClearDrawing}
                  title={drawButtonTitle[1]}
                />
                <WhiteButton
                  onClickEvent={handleCloseSpeakerPage}
                  title={closeButtonTitle}
                />
              </div>
            </div>
            <div className="flex justify-center items-center flex-1 px-6 py-4">
              <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg overflow-auto">
                <div className="p-4">
                  <DocumentViewer
                    pdfUrl={pdfUrl}
                    getCursorCoordinate={getCursorCoordinate}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-l-2 border-gray-400 mx-4" />
          <div>
            <Memo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakerPage;
