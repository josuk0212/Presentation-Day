import { Route, Routes } from "react-router";

import Home from "./HomePage/Home";
import SpeakerPage from "./PresentationPage/SpeakerPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/Speaker"
          element={<SpeakerPage />}
        />
      </Routes>
    </>
  );
}

export default App;
