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
import styles from "./Login.module.css";

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
      !/^[a-zA-Z0-9]{1,14}$/.test(
        password
      )
    ) {
      toast.error(
        "Password should contain letters and numbers only"
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
      <div className={styles.login}>
        <img src={loginLeft} alt="medicine" />
        <main className={styles.loginPart}>
          <h1>Welcome!</h1>
          <h1 className={styles.signinText}>sign in</h1>
          <section className={styles.form}>
            <div  className={styles.formBox}>
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
            <div className={styles.formBox}>
              <img src={password} alt="passwordicon" />
              <div></div>
              <input
                type="password"
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
                onClick={() => redirect("/register1")}
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
