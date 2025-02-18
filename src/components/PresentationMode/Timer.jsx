import { useEffect, useRef, useState } from "react";

import Button from "../Share/Button";

function Timer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  const displayTime = formatTime();
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

  function handleResetTimer() {
    setCurrentTime(0);
    setIsRunning(false);
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
      <div className="flex items-center ml-7">
        <div className="w-[110px]">
          <span className="font-extrabold text-2xl">{displayTime}</span>
        </div>
        <div className="flex ml-5 gap-4">
          <div>
            <Button
              onClickEvent={handlePauseTimer}
              title={pauseButtonTitle}
            />
          </div>
          <div>
            <Button
              onClickEvent={handleResetTimer}
              title={resetButtonTitle}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
