import DocumentViewer from "../ViewDocument/DocumentViewer";

function SpeakerPage() {
  const pdfUrl = localStorage.getItem("pdfUrl");

  function getCursorCoordinate(event) {
    const coordX = event.clientX;
    const coordY = event.clientY;

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
