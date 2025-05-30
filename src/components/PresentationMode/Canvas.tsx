import React, { useEffect, useMemo, useRef, useState } from "react";

import useOnOffStore from "../../stores/useOnOffStore";

interface DrawingProps {
  pdfRef: React.RefObject<HTMLCanvasElement | null>;
}

interface Coordinate {
  x: number;
  y: number;
}

interface SavedCoordinate {
  startCoordinateX: number;
  startCoordinateY: number;
  finishCoordinateX: number;
  finishCoordinateY: number;
}

function Drawing({ pdfRef }: DrawingProps): React.ReactElement {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [isShowDrawing, setIsShowDrawing] = useState<boolean>(false);
  const [coordinate, setCoordinate] = useState<Coordinate>({ x: 0, y: 0 });
  const [coordinateList, setCoordinateList] = useState<SavedCoordinate[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { isDisplayDrawing, isClearDrawing, isFullScreen, setIsClearDrawing } =
    useOnOffStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const canvasChannel = useMemo(() => {
    const channel = new BroadcastChannel("path");
    return channel;
  }, []);

  const toggleChannel = useMemo(() => {
    const channel = new BroadcastChannel("toggle");
    channel.postMessage(isDisplayDrawing);
    return channel;
  }, [isDisplayDrawing]);

  useEffect(() => {
    canvasChannel.onmessage = (shareState: MessageEvent): void => {
      setPageNumber(shareState.data);
    };

    toggleChannel.onmessage = (shareState: MessageEvent): void => {
      setIsShowDrawing(shareState.data);
    };
  }, [canvasChannel, toggleChannel]);

  useEffect(() => {
    if (!pdfRef.current) {
      return;
    }
    const pdfSize = pdfRef.current.getBoundingClientRect();
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = pdfSize.width;
    canvas.height = pdfSize.height;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.strokeStyle = "black";
    context.lineWidth = 2.5;

    function drawCoordinate(ctx: CanvasRenderingContext2D): void {
      if (!isFullScreen) {
        coordinateList.forEach((coord) => {
          ctx.beginPath();
          ctx.moveTo(coord.startCoordinateX, coord.startCoordinateY);
          ctx.lineTo(coord.finishCoordinateX, coord.finishCoordinateY);
          ctx.stroke();
        });
      } else {
        coordinateList.forEach((coord) => {
          ctx.beginPath();
          ctx.moveTo(coord.startCoordinateX * 2, coord.startCoordinateY * 2);
          ctx.lineTo(coord.finishCoordinateX * 2, coord.finishCoordinateY * 2);
          ctx.stroke();
        });
      }
    }

    coordinateList && drawCoordinate(context);
  }, [coordinateList, pdfRef, isFullScreen]);

  function handleStartDrawing(
    event: React.MouseEvent<HTMLCanvasElement>
  ): void {
    if (!isShowDrawing) {
      return;
    }
    const startCoordinateX = event.nativeEvent.offsetX;
    const startCoordinateY = event.nativeEvent.offsetY;

    setIsDrawing(true);
    setCoordinate({ x: startCoordinateX, y: startCoordinateY });
  }

  function handleDrawing(event: React.MouseEvent<HTMLCanvasElement>): void {
    if (!isDrawing) {
      return;
    }

    if (!coordinateList) {
      setCoordinateList([]);
    }

    const finishCoordinateX = event.nativeEvent.offsetX;
    const finishCoordinateY = event.nativeEvent.offsetY;
    const saveCoordinate: SavedCoordinate = {
      startCoordinateX: coordinate.x,
      startCoordinateY: coordinate.y,
      finishCoordinateX: finishCoordinateX,
      finishCoordinateY: finishCoordinateY,
    };

    setCoordinateList([...coordinateList, saveCoordinate]);
    setCoordinate({ x: finishCoordinateX, y: finishCoordinateY });
    localStorage.setItem("coordinateList", JSON.stringify(coordinateList));
  }

  useEffect(() => {
    function getDrawingData(): void {
      const savedCoordinateList = localStorage.getItem("coordinateList");
      if (savedCoordinateList) {
        setCoordinateList(JSON.parse(savedCoordinateList));
      }
    }

    addEventListener("storage", getDrawingData);

    return () => {
      removeEventListener("storage", getDrawingData);
    };
  }, []);

  function handleFinishDrawing(): void {
    setIsDrawing(false);
  }

  useEffect(() => {
    if (isFullScreen) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    localStorage.removeItem("coordinateList");
    setCoordinateList([]);
    setIsClearDrawing(false);
  }, [pageNumber, isClearDrawing, isFullScreen]);

  return (
    <canvas
      ref={canvasRef}
      onMouseUp={handleFinishDrawing}
      onMouseDown={handleStartDrawing}
      onMouseMove={handleDrawing}
      onMouseLeave={handleFinishDrawing}
      className="absolute z-10"
    />
  );
}

export default Drawing;
