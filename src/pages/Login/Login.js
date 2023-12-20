import Header from "../../components/Header/Header";
import loginLeft from "../../assets/loginLeft.png";
import loginRight from "../../assets/loginRight.png";
import styles from "./Login.module.css";
import email from "../../assets/email.svg";
import password from "../../assets/password.svg";
import apple from "../../assets/Apple.png";
import google from "../../assets/Google.svg";
import facebook from "../../assets/Facebook.svg";
import { login, forgotPassword } from "../../apis/Auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setRef } from "@mui/material";
const Login = () => {
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
      if (result.error) {
        toast.error(result.error);
      } else {
        const token = "Token " + result.token;
        localStorage.setItem("bloodBankAuthToken", JSON.stringify(token));
        toast.success("Login successfull");
        setTimeout(() => {
          redirect("/profile");
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
      <div className={styles.login}>
        <img src={loginLeft} alt="medicine" />
        <main className={styles.loginPart}>
          <h1>Welcome!</h1>
          <h1 className={styles.signinText}>sign in</h1>
          <section className={styles.form}>
            <div>
              <img src={email} alt="emailicon" />
              <div></div>
              <input
                type="text"
                name="email"
                placeholder="E-mail*"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
            <div>
              <img src={password} alt="passwordicon" />
              <div></div>
              <input
                type="text"
                name="password"
                placeholder="Password*"
                required
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
            </div>
            <a href="#forgot" onClick={handleForgotPassword}>
              Forgot password
            </a>
            <div className={styles.buttonContainer}>
              <button className={styles.loginButton} onClick={handleSumbit}>
                Login
              </button>
              <button
                className={styles.registerButton}
                onClick={() => redirect("./register1")}
              >
                Register
              </button>
            </div>
          </section>
          <div className={styles.continue}>
            <div></div>
            Or continue with
            <div></div>
          </div>
          <div className={styles.thirdParty}>
            <div className={styles.google}>
              <img src={google} alt="google" />
              <span>Google</span>
            </div>
            <div className={styles.facebook}>
              <img src={facebook} alt="facebook" />
              <span>Facebook</span>
            </div>
            <div className={styles.apple}>
              <img src={apple} alt="apple" />
              <span>Apple</span>
            </div>
          </div>
        </main>
        <img src={loginRight} alt="medicine" />
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