import PropTypes from "prop-types";
import { useEffect, useMemo, useRef, useState } from "react";

import useOnOffStore from "../../stores/useOnOffStore";

function Drawing({ pdfRef }) {
  const [isDrawing, setIsDrawing] = useState(false);
  const [isShowDrawing, setIsShowDrawing] = useState(false);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [coordinateList, setCoordinateList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const {
    isDisplayDrawing,
    isClearDrawing,
    isOpenSpeakerPage,
    isFullScreen,
    setIsClearDrawing,
  } = useOnOffStore();
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
    if (!pdfRef.current) {
      return;
    }
    const pdfSize = pdfRef.current.getBoundingClientRect();
    const canvas = canvasRef.current;
    canvas.width = pdfSize.width;
    canvas.height = pdfSize.height;

    const context = canvas.getContext("2d");
    context.strokestyle = "black";
    context.lineWidth = 2.5;

    function drawCoordinate(context) {
      if (!isFullScreen) {
        coordinateList.forEach((coord) => {
          context.beginPath();
          context.moveTo(coord.startCoordinateX, coord.startCoordinateY);
          context.lineTo(coord.finishCoordinateX, coord.finishCoordinateY);
          context.stroke();
        });
      } else {
        coordinateList.forEach((coord) => {
          context.beginPath();
          context.moveTo(
            coord.startCoordinateX * 2,
            coord.startCoordinateY * 2
          );
          context.lineTo(
            coord.finishCoordinateX * 2,
            coord.finishCoordinateY * 2
          );
          context.stroke();
        });
      }
    }

    coordinateList && drawCoordinate(context);
  }, [coordinateList, pdfRef, isFullScreen]);

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

    if (!coordinateList) {
      setCoordinateList([]);
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

  useEffect(() => {
    function getDrawingData() {
      const savedCoordinateList = JSON.parse(
        localStorage.getItem("coordinateList")
      );
      setCoordinateList(savedCoordinateList);
    }

    addEventListener("storage", getDrawingData);

    return () => {
      removeEventListener("storage", getDrawingData);
    };
  }, []);

  function handleFinishDrawing() {
    setIsDrawing(false);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
    localStorage.removeItem("coordinateList");
    setCoordinateList([]);
    setIsClearDrawing(false);
  }, [pageNumber, isOpenSpeakerPage, isClearDrawing]);

  return (
    <canvas
      ref={canvasRef}
      onMouseUp={handleFinishDrawing}
      onMouseDown={handleStartDrawing}
      onMouseMove={handleDrawing}
      onMouseLeave={handleFinishDrawing}
      className="absolute z-10"
    ></canvas>
  );
}

export default Drawing;

Drawing.propTypes = {
  pdfRef: PropTypes.object.isRequired,
};
