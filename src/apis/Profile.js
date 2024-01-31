import axios from "axios";
const backendURL = "https://bloodbak.onrender.com";

export const getProfileDetails = async () => {
  try {
    const requrl = `${backendURL}/api/profile/`;
    const token = JSON.parse(localStorage.getItem("bloodBankAuthToken"));
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const response = await axios.get(requrl, config);
    return response.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};

export const getuserDetails = async () => {
  try {
    const requrl = `${backendURL}/api/auth/user/`;
    const token = JSON.parse(localStorage.getItem("bloodBankAuthToken"));
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const response = await axios.get(requrl, config);
    return response.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};

export const EditProfileDetails = async (
  name,
  email,
  phone,
  bloodGroup,
  langauge,
  country,
  city,
  address
) => {
  try {
    const requrl = `${backendURL}/api/profile/`;
    const token = JSON.parse(localStorage.getItem("bloodBankAuthToken"));
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const payLoad = {
      name: name,
      email: email,
      phone: phone,
      bloodGroup: bloodGroup,
      langauge: langauge,
      country: country,
      city: city,
      address: address,
    };
    const response = await axios.post(requrl, payLoad, config);
    return response.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};
