import PropTypes from "prop-types";

function CursorPointer({ coordinate }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "2rem",
        height: "2rem",
        background: "red",
        left: `${coordinate.x - 15}px`,
        top: `${coordinate.y - 15}px`,
      }}
    ></div>
  );
}

export default CursorPointer;

CursorPointer.propTypes = {
  coordinate: PropTypes.object.isRequired,
};
