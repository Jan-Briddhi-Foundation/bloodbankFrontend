import Header from "../../components/Header/Header";
import styles from "./Register1.module.css";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import password from "../../assets/password.svg";

const Register1 = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h4>Step 1 - Contact</h4>
        <img src={logo} alt="logo" />
        <section className={styles.form}>
          <div>
            <img src={user} alt="usericon" />
            <div></div>
            <input type="text" name="name" placeholder="Name*" />
          </div>
          <div>
            <img src={phone} alt="phoneicon" />
            <div></div>
            <input type="text" name="phone" placeholder="Mobile" />
          </div>
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
        </section>
        <button className={styles.button}>NEXT</button>
      </main>
    </>
  );
};

export default Register1;
