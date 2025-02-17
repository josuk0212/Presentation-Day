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
    <DocumentViewer
      pdfUrl={pdfUrl}
      getCursorCoordinate={getCursorCoordinate}
    />
  );
}

export default SpeakerPage;
