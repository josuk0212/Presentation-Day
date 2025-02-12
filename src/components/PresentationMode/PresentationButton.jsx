import PropTypes from "prop-types";

function PresentationButton({ onClickEvent }) {
  return (
    <button
      onClick={onClickEvent}
      className="btn"
    >
      Go to Presentation!
    </button>
  );
}

export default PresentationButton;

PresentationButton.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
};
