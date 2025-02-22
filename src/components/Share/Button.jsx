import PropTypes from "prop-types";

function Button({ onClickEvent, title }) {
  return (
    <button
      onClick={onClickEvent}
      className="btn btn-outline text-white"
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
