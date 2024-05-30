import React from "react";

export const ConfirmModal = ({
  isVisible,
  onClose,
  selectedUsers,
  onDelete,
}) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      className="fixed inset-0  flex justify-center items-center bg-black bg-opacity-50 "
      onClick={handleClose}
    >
      <div className="bg-white p-8 rounded-[15px] shadow-lg h-[384px] w-[825px] border-[1px]">
        <div className="flex justify-center items-center mt-12">
          <img src="/images/confirm-icon.png" alt="confirm" />
        </div>
        <div className="flex justify-center mt-7">
          <h1 className="text-[32px] font-bold leading-[38.73px] ">Confirm</h1>
        </div>
        <div className="flex justify-center text-[16px] font-normal leading-[19.36px] mt-4">
          <p className="flex">
            Are you sure you want to delete
            {selectedUsers.map((user) => (
              <p
                className="font-bold text-[16px] text-[#343434] mx-1"
                key={user.id}
              >
                {user.name}
                <span className="font-normal">?</span>
              </p>
            ))}
          </p>
        </div>
        <div className="btns flex justify-center mt-[30px] gap-10 ">
          <div className="hover:bg-green-500 text-lg font-semibold text-green-500 h-12 w-full flex justify-center cursor-pointer rounded-2xl border-[1px] border-green-500 hover:text-white ">
            <button>No</button>
          </div>
          <div
            className="hover:bg-green-500 text-lg font-semibold text-green-500 h-12 w-full flex justify-center cursor-pointer rounded-2xl border-[1px] border-green-500 hover:text-white "
            onClick={() => onDelete(selectedUsers.id)}
          >
            <button>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );
};
