import PropTypes from "prop-types";
import sucsess from "../assets/Group.png"
const Modal = ({ isVisible, setIsVisible }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-[#00000040]    flex justify-center items-center">
      <div className=" bg-white p-6 rounded-2xl flex flex-col items-center gap-7">
       <div ><img src={sucsess} alt="" /></div>
        <h1 className="text-5xl text-black sora-font2">Payment sucsess</h1>
        <button onClick={() => setIsVisible()} className="btn text-xl ">
          close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default Modal;
