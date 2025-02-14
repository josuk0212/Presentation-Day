import DocumentViewer from "../ViewDocument/DocumentViewer";

function SpeakerPage() {
  const pdfUrl = localStorage.getItem("pdfUrl");

  return <DocumentViewer pdfUrl={pdfUrl} />;
}

export default SpeakerPage;
