import { useState } from "react";

import Button from "../Share/Button";

function Timer() {
  const [currentTime, setCurrentTime] = useState(0); // eslint-disable-line no-unused-vars

  const buttonTitle = ["Pause", "Reset"];

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
      <div className="flex">
        <div>{formatTime()}</div>
        <Button title={buttonTitle[0]} />
        <Button title={buttonTitle[1]} />
      </div>
    </>
  );
}

export default Timer;
