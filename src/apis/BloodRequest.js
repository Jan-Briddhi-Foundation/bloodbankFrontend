import axios from "axios";
const backendURL = "https://bloodbak.onrender.com";

export const requestBlood = async (data) => {
  try {
    const requrl = `${backendURL}/api/request-blood/`;

    const payLoad = {
      quantity: data.quantity,
      date_needed: data.date_needed,
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
