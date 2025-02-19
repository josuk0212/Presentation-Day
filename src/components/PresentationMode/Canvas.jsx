import { useEffect, useMemo, useRef, useState } from "react";

import useOnOffStore from "../../stores/useOnOffStore";

function Drawing() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [isShowDrawing, setIsShowDrawing] = useState(null);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [coordinateList, setCoordinateList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { isDisplayDrawing } = useOnOffStore();
  const canvasRef = useRef(null);

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
    canvasChannel.onmessage = (shareState) => {
      setPageNumber(shareState.data);
    };
    toggleChannel.onmessage = (shareState) => {
      setIsShowDrawing(shareState.data);
    };
  }, [canvasChannel, toggleChannel]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = innerWidth / 1.5;
    canvas.height = innerHeight / 1.5;

    const context = canvas.getContext("2d");
    context.strokestyle = "black";
    context.lineWidth = 2.5;

    coordinateList && drawCoordinate(context);
  }, [coordinateList]);

  function handleStartDrawing(event) {
    if (!isShowDrawing) {
      return;
    } else {
      const startCoordinateX = event.nativeEvent.offsetX;
      const startCoordinateY = event.nativeEvent.offsetY;

      setIsDrawing(true);
      setCoordinate({ x: startCoordinateX, y: startCoordinateY });
    }
  }

  function handleDrawing(event) {
    if (!isDrawing) {
      return;
    }

    const finishCoordinateX = event.nativeEvent.offsetX;
    const finishCoordinateY = event.nativeEvent.offsetY;
    const saveCoordinate = {
      startCoordinateX: coordinate.x,
      startCoordinateY: coordinate.y,
      finishCoordinateX: finishCoordinateX,
      finishCoordinateY: finishCoordinateY,
    };

    setCoordinateList([...coordinateList, saveCoordinate]);
    setCoordinate({ x: finishCoordinateX, y: finishCoordinateY });

    localStorage.setItem("coordinateList", JSON.stringify(coordinateList));
  }

  addEventListener("storage", () => {
    const savedCoordinateList = JSON.parse(
      localStorage.getItem("coordinateList")
    );
    setCoordinateList(savedCoordinateList);
  });

  function drawCoordinate(context) {
    coordinateList.forEach((coord) => {
      context.beginPath();
      context.moveTo(coord.startCoordinateX, coord.startCoordinateY);
      context.lineTo(coord.finishCoordinateX, coord.finishCoordinateY);
      context.stroke();
    });
  }

  function handleFinishDrawing() {
    setIsDrawing(false);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
    localStorage.removeItem("coordinateList");
    setCoordinateList([]);
  }, [pageNumber]);

  return (
    <canvas
      ref={canvasRef}
      onMouseUp={handleFinishDrawing}
      onMouseDown={handleStartDrawing}
      onMouseMove={handleDrawing}
      onMouseLeave={handleFinishDrawing}
      className="absolute w-min h-min z-10"
    ></canvas>
  );
}

export default Drawing;
