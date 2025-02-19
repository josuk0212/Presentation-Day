import useOnOffStore from "../../stores/useOnOffStore";
import Memo from "../PresentationMode/Memo";
import Timer from "../PresentationMode/Timer";
import Button from "../Share/Button";
import DocumentViewer from "../ViewDocument/DocumentViewer";

function SpeakerPage() {
  const { isDisplayDrawing, setIsDisplayDrawing, setIsClearDrawing } =
    useOnOffStore();
  const pdfUrl = localStorage.getItem("pdfUrl");
  const drawButtonTitle = ["🖍️", "🧽"];

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

  return (
    <>
      <div className="flex">
        <div>
          <Timer />
        </div>
        <div className="flex ml-11 gap-4">
          <Button
            onClickEvent={handleDrawingToggle}
            title={drawButtonTitle[0]}
          />
          <Button
            onClickEvent={handleClearDrawing}
            title={drawButtonTitle[1]}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-[80%] ml h-min border-4">
          <DocumentViewer
            pdfUrl={pdfUrl}
            getCursorCoordinate={getCursorCoordinate}
          />
        </div>
        <Memo />
      </div>
    </>
  );
}

export default SpeakerPage;
