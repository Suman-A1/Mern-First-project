import React from "react";

const Modal = ({
  handleChange,
  handlePasswordSubmit,
  passwordErrors,
  formData,
}) => {
  const handleClose = (e) => {
    if (e.target.id === "wrapper");
  };
  return (
    <>
      <div
        className="fixed inset-0 bg-blur-xs bg-black bg-opacity-25 flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[600px] flex flex-col relative bg-white p-2 rounded-xl border-[#DDDDDD] border-[1px]">
          <div className="mt-8 px-8">
            <h1 className="font-bold text-2xl leading-10">Change Password</h1>
            <p className="font-normal text-sm mt-4">Enter Your Password</p>
          </div>
          <div className="px-8">
            <form onSubmit={handlePasswordSubmit}>
              <div className="relative mt-10">
                <div className="border-[1px] rounded-3xl -top-[14px] left-3 absolute px-3 bg-white flex items-center justify-center">
                  <label
                    htmlFor="currentPassword"
                    className="font-normal py-1 text-xs"
                  >
                    Current Password
                  </label>
                </div>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border-2 py-3 px-4 w-full rounded-xl focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
                />
                {passwordErrors.currentPassword && (
                  <p className="text-red-500 text-xs">
                    {passwordErrors.currentPassword}
                  </p>
                )}
              </div>
              <div className="relative mt-[30px]">
                <div className="border-[1px] rounded-3xl -top-[14px] left-3 absolute px-3 bg-white flex items-center justify-center">
                  <label
                    htmlFor="newPassword"
                    className="font-normal py-1 text-xs"
                  >
                    New Password
                  </label>
                </div>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border-2 py-3 px-4 w-full rounded-xl focus-within:border-indigo-300 focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
                />
                {passwordErrors.newPassword && (
                  <p className="text-red-500 text-xs">
                    {passwordErrors.newPassword}
                  </p>
                )}
              </div>
              <div className="relative mt-[30px]">
                <div className="border-[1px] rounded-3xl -top-[14px] left-3 absolute px-3 bg-white flex items-center justify-center">
                  <label
                    htmlFor="confirmPassword"
                    className="font-normal py-1 text-xs"
                  >
                    Confirm New Password
                  </label>
                </div>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border-2 py-3 px-4 w-full rounded-xl focus-within:border-indigo-300 focus-within:ring focus-within:ring-indigo-200 focus-within:ring-opacity-50 outline-none"
                />
                {passwordErrors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {passwordErrors.confirmPassword}
                  </p>
                )}
              </div>
              <div className="grid mt-8 mb-10">
                <button
                  type="submit"
                  className="bg-green-500 text-white text-lg font-normal rounded-xl py-2 hover:bg-green-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
