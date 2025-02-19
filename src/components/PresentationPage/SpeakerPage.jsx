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
    <>
      <div className="flex">
        <div>
          <Timer />
        </div>
        <div className="flex ml-[630px] gap-4">
          <Button
            onClickEvent={handleDrawingToggle}
            title={drawButtonTitle[0]}
          />
          <Button
            onClickEvent={handleClearDrawing}
            title={drawButtonTitle[1]}
          />
          <Button
            onClickEvent={handleCloseSpeakerPage}
            title={closeButtonTitle}
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
