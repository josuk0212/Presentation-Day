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
      className="absolute w-5 h-5 bg-red-700 opacity-50 rounded-full"
      style={{
        left: `${coordinate.x * 2 + audiencPageViewerCoodinate.x - 10}px`,
        top: `${coordinate.y * 2 + audiencPageViewerCoodinate.y - 10}px`,
      }}
    ></div>
  );
}

export default CursorPointer;

CursorPointer.propTypes = {
  pdfRef: PropTypes.object.isRequired,
};
