import PropTypes from "prop-types";
import { useState } from "react";

function CursorPointer({ pdfRef }) {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  const audiencPageViewerCoodinate = pdfRef.current.getBoundingClientRect();

  addEventListener("storage", () => {
    const coordX = Number(localStorage.getItem("coordX"));
    const coordY = Number(localStorage.getItem("coordY"));

    setCoordinate({ x: coordX, y: coordY });
  });

  return (
    <div
      style={{
        position: "absolute",
        width: "1rem",
        height: "1rem",
        background: "red",
        opacity: "0.5",
        left: `${coordinate.x + audiencPageViewerCoodinate.x - 10}px`,
        top: `${coordinate.y + audiencPageViewerCoodinate.y - 10}px`,
      }}
    ></div>
  );
}

export default CursorPointer;

CursorPointer.propTypes = {
  pdfRef: PropTypes.object.isRequired,
};
