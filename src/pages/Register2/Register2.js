import Header from "../../components/Header/Header";
import styles from "./Register2.module.css";
import logo from "../../assets/logo.svg";
import location from "../../assets/location.svg";
import globe from "../../assets/globe.svg";
import blood from "../../assets/blood.svg";

const Register2 = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h4>Step 2 - Details</h4>
        <img src={logo} alt="logo" />
        <section className={styles.form}>
          <div>
            <img src={location} alt="locationicon" />
            <div className={styles.line}></div>
            <input type="text" name="city" placeholder="City*" />
          </div>
          <div>
            <img src={globe} alt="globeicon" />
            <div className={styles.line}></div>
            <input type="text" name="country" placeholder="Country*" />
          </div>
          <div>
            <img src={blood} alt="bloodicon" />
            <div className={styles.line}></div>
            <div className={styles.customSelect}>
              <select name="bloodGroup">
                <option value="" selected>
                  Blood Group
                </option>
                <option value="A+">O+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
          <section>
            <span>
              <input type="radio" />
              <p>I am a blood donor.</p>
            </span>
            <span>
              <input type="radio" />
              <p>I need a blood donation.</p>
            </span>
          </section>
        </section>
        <button className={styles.button}>CREATE ACCOUNT</button>
      </main>
    </>
  );
};

export default Register2;
