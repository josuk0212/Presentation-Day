import useOnOffStore from "../../stores/useOnOffStore";
import Memo from "../PresentationMode/Memo";
import Timer from "../PresentationMode/Timer";
import { WhiteButton } from "../Share/Button";
import DocumentViewer from "../ViewDocument/DocumentViewer";

function SpeakerPage() {
  const { isDisplayDrawing, setIsDisplayDrawing, setIsClearDrawing } =
    useOnOffStore();
  const pdfUrl = localStorage.getItem("pdfUrl");
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
    window.close();
  }

  return (
    <div className="w-screen h-screen bg-primary">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex">
          <div>
            <div className="flex">
              <div>
                <Timer />
              </div>
              <div className="flex ml-[60%] gap-4">
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
            <div className="flex justify-center items-center mt-2">
              <div className="border-4 rounded-xl bg-third border-primary">
                <div className="mt-10 mr-10 ml-20 mb-10">
                  <DocumentViewer
                    pdfUrl={pdfUrl}
                    getCursorCoordinate={getCursorCoordinate}
                  />
                </div>
              </div>
            </div>
          </div>
          <line className="border-2 border-gray-400 mr-2 ml-1"></line>
          <div>
            <Memo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakerPage;
