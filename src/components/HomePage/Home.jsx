import FileUpload from "../FileUpload/FileUpload";

function Home() {
  return (
    <>
      <h1 className="flex justify-center text-5xl mt-16">Welcome HP</h1>
      <div className="flex justify-center text-2xl mt-6">Help Presentation</div>
      <FileUpload />
    </>
  );
}

export default Home;
