import React, { useState } from "react";
import { validatePassword } from "../../utils/validations";
import { toast } from "react-toastify";

const PassModal = ({ isVisible, onClose, storedPassword }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordErrors, setPasswordErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validatePassword(formData, storedPassword);
    setPasswordErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        toast.success("Password updated successfully!");
        onClose();
      }, 2000);
    }
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
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassModal;
