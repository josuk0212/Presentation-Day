import { useState } from "react";

import Button from "../Share/Button";

function Memo() {
  const [fontSize, setFontSize] = useState(20);
  const buttonTitle = ["+", "-"];

  function handleIncreaseFontSize() {
    setFontSize(fontSize + 1);
  }

  function handleDecreaseFontSize() {
    setFontSize(fontSize - 1);
  }

  return (
    <>
      <div>
        <label className="w-min h-min">
          <textarea
            placeholder="글자를 입력해주세요"
            className={
              "textarea textarea-bordered resize-none w-[250px] h-[500px]"
            }
            style={{ fontSize: `${fontSize}px` }}
          ></textarea>
        </label>
        <div className="flex-col">
          <Button
            title={buttonTitle[0]}
            onClickEvent={handleIncreaseFontSize}
          />
          <Button
            title={buttonTitle[1]}
            onClickEvent={handleDecreaseFontSize}
          />
        </div>
      </div>
    </>
  );
}

export default Memo;
