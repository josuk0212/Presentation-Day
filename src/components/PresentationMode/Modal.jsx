import PropTypes from "prop-types";

import useOnOffStore from "../../stores/useOnOffStore";
import { BlackButton } from "../Share/Button";

function Modal({ setIsModal }) {
  const { setIsFullScreen } = useOnOffStore();
  const closeButtonTitle = "X";
  const viewButtonTitle = "Full Screen";

  function closeModal() {
    setIsModal(false);
    setIsFullScreen(false);
  }

  function viewFullScreen() {
    const documentSection = document.getElementById("view-document");

    if (document.fullscreenElement) {
      documentSection.exitFullscreen();
    } else {
      documentSection.requestFullscreen();
      setIsFullScreen(true);
    }
  }

  return (
    <>
      <div className="fixed top-0 z-20 flex justify-center items-center w-screen h-full bg-modalbg bg-opacity-50 backdrop-blur-sm">
        <div className="card w-96 h-48 bg-white">
          <div className="absolute top-0 right-0 mt-3 mr-3">
            <BlackButton
              onClickEvent={closeModal}
              title={closeButtonTitle}
            />
          </div>
          <span className="mt-10 ml-6">
            <p>
              본 페이지는 청중 페이지입니다.<br></br>페이지를 이동하여
              사용해주시기 바랍니다.
            </p>
          </span>
          <div className="absolute bottom-0 right-0 mb-3 mr-3">
            <BlackButton
              onClickEvent={viewFullScreen}
              title={viewButtonTitle}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

Modal.propTypes = {
  setIsModal: PropTypes.func.isRequired,
};
