import React, { useEffect, useState } from "react";

interface Coordinate {
  x: number;
  y: number;
}

interface CursorPointerProps {
  pdfRef: React.RefObject<HTMLCanvasElement | null>;
}

function CursorPointer({ pdfRef }: CursorPointerProps): React.ReactElement {
  const [coordinate, setCoordinate] = useState<Coordinate>({ x: 0, y: 0 });
  const [audiencePageViewerCoodinate, setAudiencePageViewerCoodinate] =
    useState<Coordinate>({ x: 0, y: 0 });

  useEffect(() => {
    function getCursorCoordinate(): void {
      const coordX = Number(localStorage.getItem("coordX"));
      const coordY = Number(localStorage.getItem("coordY"));
      const fullScreenViewerCoodinate = pdfRef.current!.getBoundingClientRect();

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
