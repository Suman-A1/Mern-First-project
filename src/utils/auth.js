const TOKEN_KEY = "authToken";
const USER_KEY = "userDetails";

export const generateToken = (userDetails) => {
  const token = btoa(JSON.stringify(userDetails));
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(userDetails));
  return token;
};

export const getUserDetails = () => {
  const userDetails = localStorage.getItem(USER_KEY);
  if (!userDetails) return null;
  try {
    return JSON.parse(userDetails);
  } catch (e) {
    console.error("Failed...", e);
    return null;
  }
};

export const isAuthenticated = () => {
  return localStorage.getItem(TOKEN_KEY) !== null;
};

const logout = (navigate) => {
  localStorage.removeItem(TOKEN_KEY);
  //localStorage.removeItem(USER_KEY); // Clear user details on logout
  navigate("/");
};

export default logout;
