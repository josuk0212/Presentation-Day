import PropTypes from "prop-types";

import Button from "../Share/Button";

function Modal({ setIsModal }) {
  const buttonTitle = "X";
  function closeModal() {
    setIsModal(false);
  }

  return (
    <>
      <div className="fixed z-10 flex justify-center items-center w-screen h-screen bg-modalbg bg-opacity-50">
        <div className="card w-96 h-48 bg-white">
          <div className="absolute top-0 right-0 mt-3 mr-3">
            <Button
              onClickEvent={closeModal}
              title={buttonTitle}
            />
          </div>
          <span className="mt-10 ml-6">
            <p>
              본 페이지는 청중 페이지입니다.<br></br>페이지를 이동하여
              사용해주시기 바랍니다.
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Modal;

Modal.propTypes = {
  setIsModal: PropTypes.func.isRequired,
};
