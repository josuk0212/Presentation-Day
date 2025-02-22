import PropTypes from "prop-types";

function WhiteButton({ onClickEvent, title }) {
  return (
    <button
      onClick={onClickEvent}
      className="btn btn-outline text-white"
    >
      {title}
    </button>
  );
}

function BlackButton({ onClickEvent, title }) {
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

WhiteButton.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

BlackButton.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
