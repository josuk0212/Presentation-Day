import { useEffect, useRef, useState } from "react";

import { WhiteButton } from "../Share/Button";

function Timer() {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

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
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  function handlePauseTimer(): void {
    setIsRunning(!isRunning);
  }

  function handleResetTimer(): void {
    setCurrentTime(0);
    setIsRunning(false);
  }

  function formatTime(): string {
    const hours = Math.floor(currentTime / (1000 * 60 * 60));
    const minutes = Math.floor((currentTime / (1000 * 60)) % 60);
    const seconds = Math.floor((currentTime / 1000) % 60);

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <>
      <div className="flex items-center ml-7">
        <div className="w-[110px]">
          <span className="font-extrabold text-2xl text-white">
            {displayTime}
          </span>
        </div>
        <div className="flex ml-5 gap-4">
          <div>
            <WhiteButton
              onClickEvent={handlePauseTimer}
              title={pauseButtonTitle}
            />
          </div>
          <div>
            <WhiteButton
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
