import useOnOffStore from "../../stores/useOnOffStore";
import Memo from "../PresentationMode/Memo";
import Timer from "../PresentationMode/Timer";
import Button from "../Share/Button";
import DocumentViewer from "../ViewDocument/DocumentViewer";

function SpeakerPage() {
  const { isDisplayDrawing, setIsDisplayDrawing } = useOnOffStore();
  const pdfUrl = localStorage.getItem("pdfUrl");
  const drawButtonTitle = "🖍️";

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

  return (
    <>
      <div className="flex">
        <div>
          <Timer />
        </div>
        <div className="ml-11">
          <Button
            onClickEvent={handleDrawingToggle}
            title={drawButtonTitle}
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
