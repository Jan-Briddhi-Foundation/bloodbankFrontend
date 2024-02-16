import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { forgotPassword, login } from "../../apis/Auth";
import apple from "../../assets/Apple.png";
import facebook from "../../assets/Facebook.svg";
import google from "../../assets/Google.svg";
import email from "../../assets/email.svg";
import loginLeft from "../../assets/loginLeft.png";
import loginRight from "../../assets/loginRight.png";
import password from "../../assets/password.svg";
import Header from "../../components/Header/Header";
import { CheckAuth } from "../../apis/LoggedInProfileType";

const Login = () => {
  (async () => await CheckAuth())();

  const formfield =
    "grid grid-cols-[auto,1fr] rounded overflow-hidden bg-[#f9f9f9] focus:outline mb-6";
  const inputformField =
    "bg-[#f9f9f9] p-2 text-3xl focus:outline-none max-[410px]:text-2xl max-[410px]:p-0";
  const iconStyle =
    "w-16 m-5 pr-2.5 border-r-[1px] border-black max-[410px]:w-12 ";

  const redirect = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const validateForm = (email, password) => {
    let error;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Enter valid email");
      error = true;
    }
    if (!/^.{4,24}$/.test(password)) {
      toast.error("Password should between 4 and 24 characters");
      error = true;
    }

    if (error) {
      return false;
    }

    return true;
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const validate = validateForm(user.email, user.password);

    if (validate) {
      const result = await login(user.email, user.password);
      if (result.errors) {
        toast.error(result.errors);
      } else {
        const token = "Token " + result.token;
        localStorage.setItem("bloodBankAuthToken", JSON.stringify(token));
        toast.success("Login successfull");
        if (result.user.profile.profile_type === "patient") {
          redirect("/patient");
          return;
        }
        if (result.user.profile.profile_type === "donor") {
          redirect("/donor");
          return;
        }
        setTimeout(() => {
          redirect("/register2");
        }, 1000);
      }
    }
  };

  const handleForgotPassword = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      toast.error("Enter your email");
    } else {
      const result = await forgotPassword(user.email);
      if (result) {
        toast.error("Email does not exist");
      } else {
        toast.success("Email sent to reset the password");
        setUser({ ...user, email: "" });
      }
    }
  };

  return (
    <>
      <Header />

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 grid grid-cols-[auto,1fr,auto] gap-x-2">
          <img className="self-end max-w-sm" src={loginLeft} alt="medicine" />
          <div className="rounded-lg border-2 border-[#BA595F]">
            <div className="mb-12 text-center">
              <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
                Welcome!
              </h1>
              <h2 className="text-[#222222] text-5xl font-semibold mb-12 max-[410px]:text-4xl">
                sign in
              </h2>
            </div>
            <form className="flex flex-col gap-y-4 mb-24">
              <div className={formfield}>
                <img className={iconStyle} src={email} alt="email-icon" />

                <input
                  className={inputformField}
                  type="text"
                  name="email"
                  placeholder="E-mail*"
                  value={user.email}
                  required
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div className={formfield}>
                <img className={iconStyle} src={password} alt="password-icon" />

                <input
                  className={inputformField}
                  type="password"
                  name="password"
                  placeholder="Password*"
                  required
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <a
                className="self-start text-3xl underline underline-offset-2 mt-6 mb-8"
                href="#forgot"
                onClick={handleForgotPassword}
              >
                Forgot password
              </a>

              <div className="grid grid-cols-2 gap-12 justify-around">
                <button
                  className="bg-[#ba595f] border-[1px] border-[#ba595f] rounded-[5px] font-[Roboto] text-3xl p-3 uppercase font-medium tracking-normal text-center text-[#f9f9f9] font-medium cursor-pointer"
                  onClick={handleSumbit}
                >
                  Login
                </button>
                <button
                  className="border-[1px] border-[#ba595f] rounded-[5px] font-[Roboto] text-3xl p-3 uppercase font-medium tracking-normal text-center text-[#ba595f] font-medium cursor-pointer"
                  onClick={() => redirect("/register1")}
                >
                  Register
                </button>
              </div>
            </form>
            <div className="">
              <p className="text-2xl">Or continue with</p>
            </div>
            <div className="flex gap-24 mb-4 ">
              <p className="h-[3rem] w-[3rem] flex flex-col gap-1 items-center">
                <img src={google} alt="google" />
                <span className="text-xl">Google</span>
              </p>
              <p className="h-[3rem] w-[3rem] flex flex-col gap-1 items-center ">
                <img src={facebook} alt="facebook" />
                <span className="text-xl">Facebook</span>
              </p>
              <p className="h-[3rem] w-[3rem] flex flex-col gap-1 items-center">
                <img src={apple} alt="apple" />
                <span className="text-xl">Apple</span>
              </p>
            </div>
          </div>
          <img
            className="self-start max-w-sm"
            src={loginRight}
            alt="medicine"
          />
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Login;
