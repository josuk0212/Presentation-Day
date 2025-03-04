import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function CursorPointer({ pdfRef }) {
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [audiencePageViewerCoodinate, setAudiencePageViewerCoodinate] =
    useState({ x: 0, y: 0 });

  useEffect(() => {
    function getCursorCoordinate() {
      const coordX = Number(localStorage.getItem("coordX"));
      const coordY = Number(localStorage.getItem("coordY"));
      const fullScreenViewerCoodinate = pdfRef.current.getBoundingClientRect();

      setAudiencePageViewerCoodinate({
        x: fullScreenViewerCoodinate.x,
        y: fullScreenViewerCoodinate.y,
      });
      setCoordinate({ x: coordX, y: coordY });
    }

    addEventListener("storage", getCursorCoordinate);

    return () => {
      removeEventListener("storage", getCursorCoordinate);
    };
  }, []);

  return (
    <div
      className="absolute w-5 h-5 bg-red-700 opacity-50 rounded-full"
      style={{
        left: `${coordinate.x * 2 + audiencePageViewerCoodinate.x - 10}px`,
        top: `${coordinate.y * 2 + audiencePageViewerCoodinate.y - 10}px`,
      }}
    ></div>
  );
}

export default CursorPointer;

CursorPointer.propTypes = {
  pdfRef: PropTypes.object.isRequired,
};
