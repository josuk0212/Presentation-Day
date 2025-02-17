import { useEffect, useRef, useState } from "react";

function Drawing() {
  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    context.strokestyle = "black";
    context.lineWidth = 2.5;
    contextRef.current = context;

    setCtx(contextRef.current);
  }, []);

  function handleDrawing(event) {
    if (ctx) {
      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
      } else {
        ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
        ctx.stroke();
      }
    }
  }

  function handleStartDrawing() {
    setIsDrawing(true);
  }

  function handleFinishDrawing() {
    setIsDrawing(false);
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseUp={handleFinishDrawing}
      onMouseDown={handleStartDrawing}
      onMouseMove={handleDrawing}
      onMouseLeave={handleFinishDrawing}
      className="absolute w-min h-min z-50"
    ></canvas>
  );
}

export default Drawing;
