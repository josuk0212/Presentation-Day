import Memo from "../PresentationMode/Memo";
import Timer from "../PresentationMode/Timer";
import DocumentViewer from "../ViewDocument/DocumentViewer";

function SpeakerPage() {
  const pdfUrl = localStorage.getItem("pdfUrl");

  function getCursorCoordinate(event) {
    const coordX = event.nativeEvent.offsetX;
    const coordY = event.nativeEvent.offsetY;

    localStorage.setItem("coordX", coordX);
    localStorage.setItem("coordY", coordY);
  }

  return (
    <>
      <div>
        <Timer />
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
