interface ButtonProps {
  onClickEvent: () => void;
  title: string;
}

function WhiteButton({ onClickEvent, title }: ButtonProps) {
  return (
    <button
      onClick={onClickEvent}
      className="btn btn-outline text-white"
    >
      {title}
    </button>
  );
}

function BlackButton({ onClickEvent, title }: ButtonProps) {
  return (
    <button
      onClick={onClickEvent}
      className="btn btn-outline border-stone-900"
    >
      {title}
    </button>
  );
}

export { WhiteButton, BlackButton };
