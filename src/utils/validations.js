// validations.js

export const validateEmail = (formData) => {
  let emailError = {};

  if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
    emailError.email = "Email is invalid";
  }

  return emailError;
};

export const validatePassword = (formData) => {
  let passError = {};

  if (!formData.currentPassword) {
    passError.currentPassword = "Current password is required";
  }

  if (!formData.newPassword) {
    passError.newPassword = "New password is required";
  } else {
    const passwordPattern = /^(?=.*[!@#$])[a-zA-Z0-9!@#$]{5,}$/;
    if (!passwordPattern.test(formData.newPassword)) {
      passError.newPassword =
        "Password must have at least 5 characters including special characters like @, $, !, or #";
    }
  }

  if (formData.newPassword !== formData.confirmPassword) {
    passError.confirmPassword = "Passwords do not match";
  }

  return passError;
};
