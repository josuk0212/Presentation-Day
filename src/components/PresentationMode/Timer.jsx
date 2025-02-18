import Button from "../Share/Button";

function Timer() {
  const buttonTitle = ["Pause", "Reset"];

  return (
    <>
      <Button title={buttonTitle[0]} />
      <Button title={buttonTitle[1]} />
    </>
  );
}

export default Timer;
