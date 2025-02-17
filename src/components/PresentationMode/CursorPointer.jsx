import PropTypes from "prop-types";
import { useState } from "react";

function CursorPointer() {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  addEventListener("storage", () => {
    const coordX = Number(localStorage.getItem("coordX"));
    const coordY = Number(localStorage.getItem("coordY"));

    setCoordinate({ x: coordX * 4, y: coordY * 2.9 });
  });

  return (
    <div
      style={{
        position: "absolute",
        width: "2rem",
        height: "2rem",
        background: "red",
        left: `${coordinate.x}px`,
        top: `${coordinate.y}px`,
      }}
    ></div>
  );
}

export default CursorPointer;

CursorPointer.propTypes = {
  coordinate: PropTypes.object.isRequired,
};
