import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-blur-xs bg-black bg-opacity-25 flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[600px] flex flex-col relative bg-white p-2 rounded-xl border-[#DDDDDD] border-[1px]">
          {/* <button
            className="text-black text-xl place-self-end absolute top-6 right-6"
            onClick={onClose}
          >
            X
          </button> */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
