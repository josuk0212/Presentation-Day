import PropTypes from "prop-types";

function Button({ onClickEvent, title }) {
  return (
    <button
      onClick={onClickEvent}
      className="btn"
    >
      {title}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
