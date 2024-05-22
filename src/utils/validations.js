// validations.js

export const validateEmail = (formData) => {
  let errors = {};

  if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  return errors;
};

export const validatePassword = (formData) => {
  let errors = {};

  if (!formData.currentPassword) {
    errors.currentPassword = "Current password is required";
  }

  if (!formData.newPassword) {
    errors.newPassword = "New password is required";
  } else {
    const passwordPattern = /^(?=.*[!@#$])[a-zA-Z0-9!@#$]{5,}$/;
    if (!passwordPattern.test(formData.newPassword)) {
      errors.newPassword =
        "Password must have at least 5 characters including special characters like @, $, !, or #";
    }
  }

  if (formData.newPassword !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
