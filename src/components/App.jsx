import { Route, Routes } from "react-router";

import Home from "./HomePage/Home";
import MobilePage from "./MobilePage/mobilePage";
import SpeakerPage from "./PresentationPage/SpeakerPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/Speaker"
        element={<SpeakerPage />}
      />
      <Route
        path="/Mobile"
        element={<MobilePage />}
      />
    </Routes>
  );
}

export default App;
