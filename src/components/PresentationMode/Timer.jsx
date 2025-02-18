import { useEffect, useRef, useState } from "react";

import Button from "../Share/Button";

function Timer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // eslint-disable-line no-unused-vars
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  const pauseButtonTitle = isRunning ? "Pause" : "Start";
  const resetButtonTitle = "Reset";

  useEffect(() => {
    startTimeRef.current = Date.now() - currentTime;

    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  function handlePauseTimer() {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  }

  function formatTime() {
    let hours = Math.floor(currentTime / (1000 * 60 * 60));
    let minutes = Math.floor((currentTime / (1000 * 60)) % 60);
    let seconds = Math.floor((currentTime / 1000) % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <>
      <div className="flex gap-5">
        <div>{formatTime()}</div>
        <Button
          onClickEvent={handlePauseTimer}
          title={pauseButtonTitle}
        />
        <Button title={resetButtonTitle} />
      </div>
    </>
  );
}

export default Timer;
