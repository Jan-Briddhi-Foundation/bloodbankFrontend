import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getProfileDetails } from "../apis/Profile";

export const CheckAuth = async () => {
  const redirect = useNavigate();

  try {
    const authToken = localStorage.getItem("bloodBankAuthToken");

    if (!authToken) {
      redirect("/login");
    } else {
      const result = await getProfileDetails();

      if (result.detail === "Invalid token.") {
        toast.error("Session Expired");
        toast.error("Login again");
        localStorage.removeItem("bloodBankAuthToken");

        setTimeout(() => redirect("/login"), 1000);
      }

      const profileType = result?.profileForm?.profile_type;

      if (profileType === undefined && authToken) {
        setTimeout(() => {
          redirect("/register2");
        });
      }

      return profileType;
    }
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
