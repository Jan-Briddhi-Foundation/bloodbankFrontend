import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getProfileDetails } from "../apis/Profile";

export const CheckAuth = async () => {
  const redirect = useNavigate();

  try {
    const authToken = localStorage.getItem("bloodBankAuthToken");
    const result = await getProfileDetails();
    const profileType = result?.profileForm?.profile_type;

    if (!authToken) {
      redirect("/login");
    }

    if (result.detail === "Invalid token.") {
      toast.error("Session Expired");
      toast.error("Login again");
      localStorage.removeItem("bloodBankAuthToken");

      setTimeout(() => {
        redirect("/login");
      }, 1000);
    }

    if (profileType === undefined && authToken) {
      setTimeout(() => {
        redirect("/register2");
      });
    }

    return profileType;
  } catch (error) {
    console.error("Error checking authentication:", error);
    if (error) {
      return error.data;
    }
  }
};

export const PatientRedirect = async () => {
  const redirect = useNavigate();
  const authenticated = await CheckAuth();

  if (authenticated === "patient") {
    setTimeout(() => {
      redirect("/patient");
    });
  }

  return authenticated;
};

export const DonorRedirect = async () => {
  const redirect = useNavigate();
  const authenticated = await CheckAuth();

  if (authenticated === "donor") {
    setTimeout(() => {
      redirect("/donor");
    });
  }

  return authenticated;
};

export const LogInStatus = async () => {
  const redirect = useNavigate();
  const authenticated = await CheckAuth();

  if (authenticated === "donor") {
    redirect("/donor");
  } else if (authenticated === "patient") {
    redirect("/patient");
  } else {
    redirect("/register2");
  }

  return authenticated;
};
