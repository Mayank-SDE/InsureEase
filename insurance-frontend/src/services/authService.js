import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Backend Base URL

// 1️⃣ Register User
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data; // Returns user info & token
};

// 2️⃣ Login User
export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data; // Returns token & user info
};

// 3️⃣ Logout User
export const logout = () => {
  localStorage.removeItem("token"); // Remove token from storage
};

// 4️⃣ Get Current User
export const getCurrentUser = async (token) => {
  const response = await axios.get(`${API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data; // Returns user info
};

// 5️⃣ OAuth Login (Google/GitHub)
export const oauthLogin = async (provider, token) => {
  const response = await axios.post(`${API_URL}/oauth/${provider}`, { token });
  return response.data; // Returns JWT & user info
};

// 6️⃣ Enable 2FA
export const enable2FA = async (email) => {
  const response = await axios.post(`${API_URL}/enable-2fa`, { email });
  return response.data; // Returns OTP sent status
};

// 7️⃣ Verify 2FA
export const verify2FA = async (email, otp) => {
  const response = await axios.post(`${API_URL}/verify-2fa`, { email, otp });
  return response.data; // Returns verification success & token
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  oauthLogin,
  enable2FA,
  verify2FA,
};
