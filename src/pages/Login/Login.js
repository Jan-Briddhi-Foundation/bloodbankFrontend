import Header from "../../components/Header/Header";
import loginLeft from "../../assets/loginLeft.png";
import loginRight from "../../assets/loginRight.png";
import styles from "./Login.module.css";
import email from "../../assets/email.svg";
import password from "../../assets/password.svg";
import apple from "../../assets/Apple.png";
import google from "../../assets/Google.svg";
import facebook from "../../assets/Facebook.svg";
const Login = () => {
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
              <input type="text" name="email" placeholder="E-mail*" />
            </div>
            <div>
              <img src={password} alt="passwordicon" />
              <div></div>
              <input
                type="text"
                name="password"
                placeholder="Password*"
                required
              />
            </div>
            <a href="#forgot">Forgot password</a>
            <div className={styles.buttonContainer}>
              <button className={styles.loginButton}>Login</button>
              <button className={styles.registerButton}>Register</button>
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
    </>
  );
};

export default Login;
