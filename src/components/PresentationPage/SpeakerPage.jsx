import Memo from "../PresentationMode/Memo";
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
      <div className="flex grid-cols-2">
        <div className="w-[60%] ml h-min border-4">
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
