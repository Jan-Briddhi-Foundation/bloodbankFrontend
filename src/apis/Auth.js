import axios from "axios";
const backendURL = "https://bloodbak.onrender.com";

export const register = async (name, email, phone, password) => {
  try {
    const requrl = `${backendURL}/api/auth/users/`;
    const payLoad = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };
    const response = await axios.post(requrl, payLoad);
    return response.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};

export const register2 = async (city, country, bloodGroup, type) => {
  try {
    const requrl = `${backendURL}/api/profile-details/`;

    const payLoad = {
      city: city,
      country: country,
      bloodGroup: bloodGroup,
      profile_type: type,
    };

    const token = JSON.parse(localStorage.getItem("bloodBankAuthToken"));
    const config = {
      headers: {
        Authorization: token,
      },
    };

    const response = await axios.post(requrl, payLoad, config);
    return response.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};

export const login = async (email, password) => {
  try {
    const requrl = `${backendURL}/api/auth/login/`;
    const payLoad = {
      email: email,
      password: password,
    };
    const response = await axios.post(requrl, payLoad);
    return response.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};

export const forgotPassword = async (email) => {
  try {
    const requrl = `${backendURL}/api/auth/users/reset_password/`;
    const payLoad = {
      email: email,
    };
    const response = await axios.post(requrl, payLoad);
    return response.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};
