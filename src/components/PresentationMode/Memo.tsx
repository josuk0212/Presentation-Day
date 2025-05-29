import React, { useEffect, useMemo, useState } from "react";

import { WhiteButton } from "../Share/Button";

interface MemoItem {
  id: number;
  memo: string;
}

function Memo(): React.ReactElement {
  const [fontSize, setFontSize] = useState<number>(20);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPageNumber, setTotalPageNumber] = useState<number>(0);
  const [memo, setMemo] = useState<string>("");
  const [memoList, setMemoList] = useState<MemoItem[]>([]);

  const buttonTitle = ["+", "-"] as const;

  const memoChannel = useMemo(() => {
    const channel = new BroadcastChannel("path");
    return channel;
  }, []);

  useEffect(() => {
    memoChannel.onmessage = (shareState: MessageEvent): void => {
      setPageNumber(shareState.data[0]);
      setTotalPageNumber(shareState.data[2]);
    };
  }, [memoChannel]);

  function handleWriteMemo(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    const memoText = event.target.value;
    setMemo(memoText);
  }

  useEffect(() => {
    const memoList = Array(totalPageNumber)
      .fill(null)
      .map((_, index) => {
        return { id: index + 1, memo: "" };
      });

    setMemoList(memoList);
  }, [totalPageNumber]);

  function handleSaveMemo(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const form = event.currentTarget;
    const saveMemo = new FormData(form);
    const getMemo = Object.fromEntries(saveMemo.entries());
    const memos: MemoItem = {
      id: pageNumber,
      memo: getMemo[pageNumber] as string,
    };

    setMemoList((prev) => [...prev, memos]);
  }

  function handleIncreaseFontSize(): void {
    setFontSize(fontSize + 1);
  }

  function handleDecreaseFontSize(): void {
    setFontSize(fontSize - 1);
  }

  useEffect(() => {
    memoList.forEach((item) => {
      if (item.id === pageNumber) {
        setMemo(item.memo);
      }
    });
  }, [pageNumber, memoList]);

  return (
    <div className="flex flex-col w-[300px] h-[93vh] bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl shadow-lg p-4">
      <form
        method="post"
        onSubmit={handleSaveMemo}
        className="flex flex-col h-full"
      >
        <div className="flex-1">
          <label>
            <textarea
              name={pageNumber.toString()}
              placeholder="글자를 입력해주세요"
              value={memo}
              onChange={handleWriteMemo}
              className="textarea textarea-bordered resize-none w-full h-full bg-second text-white overflow-auto"
              style={{ fontSize: `${fontSize}px` }}
            />
          </label>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            <div>
              <WhiteButton
                title={buttonTitle[0]}
                onClickEvent={handleIncreaseFontSize}
              />
            </div>
            <div>
              <WhiteButton
                title={buttonTitle[1]}
                onClickEvent={handleDecreaseFontSize}
              />
            </div>
          </div>
          <button className="btn btn-outline text-white">Save Memo</button>
        </div>
      </form>
    </div>
  );
}

export default Memo;
