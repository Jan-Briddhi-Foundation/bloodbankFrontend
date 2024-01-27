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
// import styles from "./Login.module.css";

const Login = () => {
  const redirect = useNavigate();
  const loginCheck = localStorage.getItem("bloodBankAuthToken");

  if (loginCheck) {
    redirect("/profile");
  }
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
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      toast.error(
        "Password should contain at least one uppercase, one lowercase, one number, and one special character"
      );
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
        if (result.user.profile.profile_type !== "donor") {
          redirect("/patient");
          return;
        }
        setTimeout(() => {
          redirect("/donate");
        }, 2000);
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
      <div className="md:h-screen md:flex md:gap-8 md:space-x-5 justify-between items-center w-[auto] px-4 mb-8">
        <img
          className=" flex w-[15rem] h-[auto] md:self-end  md:ml-8 md:py-16 py-8"
          src={loginLeft}
          alt="medicine"
        />
        <main className=" bg-white  md:py-8 px-4 flex flex-col  gap-4 items-center w-[auto] rounded-[5px] border-2 border-[#BA595F]">
          <h1 className="text-black text-2xl md:text-3xl p-4">Welcome!</h1>
          <h1 className="text-black text-2xl md:text-2xl">sign in</h1>
          <section className="flex flex-col gap-6 items-center">
            <div className="flex items-center w-[auto] bg-white rounded-[5px] gap-2 border p-1">
              <img className="w-[2rem]" src={email} alt="emailicon" />
              <div className="h-[5vh] w-px bg-black self-center"></div>
              <input
                type="text"
                name="email"
                placeholder="E-mail*"
                value={user.email}
                className="w-[100%] md:w-[24rem] gap-2 text-xs"
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
            <div className="flex items-center w-[auto]  bg-white rounded-[5px] gap-2 border p-1">
              <img className="w-[2rem]" src={password} alt="passwordicon" />
              <div className="h-[5vh] w-px  bg-black self-center"></div>
              <input
                type="password"
                name="password"
                placeholder="Password*"
                required
                className="w-[15rem] md:w-[24rem] gap-2 text-lg"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
            <a
              className="self-start"
              href="#forgot"
              onClick={handleForgotPassword}
            >
              Forgot password
            </a>
            <div className="flex gap-4 w-[100%] justify-around">
              <button
                className="bg-[#BA595F] border-[1px]  border-[#BA595F] rounded-[5px] font-[Roboto] text-[1rem] font-medium  tracking-normal text-center text-[rgba(255,_255,_255,_1)] w-[9rem] md:w-[13rem] max-w-[16rem] h-[auto] p-2 cursor-pointer"
                onClick={handleSumbit}
              >
                Login
              </button>
              <button
                className=" border-[1px]  border-[#BA595F] rounded-[5px] font-[Roboto] text-[1rem] font-medium  tracking-normal text-center text-[#BA595F] h-[auto]  p-2  cursor-pointer w-[9rem] md:w-[13rem] max-w-[16rem]"
                onClick={() => redirect("/register1")}
              >
                Register
              </button>
            </div>
          </section>
          <div className="">
            <div></div>
            Or continue with
            <div></div>
          </div>
          <div className="flex gap-4 mb-4 ">
            <div className="h-[3rem] w-[3rem] flex flex-col gap-1 items-center">
              <img src={google} alt="google" />
              <span className="text-xs">Google</span>
            </div>
            <div className="h-[3rem] w-[3rem] flex flex-col gap-1 items-center ">
              <img src={facebook} alt="facebook" />
              <span className="text-xs">Facebook</span>
            </div>
            <div className="h-[3rem] w-[3rem] flex flex-col gap-1 items-center">
              <img src={apple} alt="apple" />
              <span className="text-xs">Apple</span>
            </div>
          </div>
        </main>
        <img
          className="w-[20rem] self-start mt-4 p-4"
          src={loginRight}
          alt="medicine"
        />
      </div>
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
