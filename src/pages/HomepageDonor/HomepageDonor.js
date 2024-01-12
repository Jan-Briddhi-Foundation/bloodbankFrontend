import styles from "./HomepageDonor.module.css";
import Header from "../../components/Header/Header";
import check from "../../assets/check.svg";
import share from "../../assets/share.svg";
import cross from "../../assets/cross.svg";
import calendar from "../../assets/calendar.svg";
import location from "../../assets/location.svg";
import { Link } from "react-router-dom";

const HomepageDonor = () => {
  return (
    <>
      <Header />
      <div className={styles.homepageDonor}>
        <div className={styles.title}>
          <h1>Donate Blood</h1>
          <span>Each donation can help save up to 3 lives!</span>
        </div>
        <div className={styles.requests}>
          <section className={styles.requestBox}>
            <div className={styles.requestBoxLeft}>
              <span>Blood Request: Type AB</span>
              <div className={styles.requestBoxLeftBottom}>
                <span>
                  <img src={calendar} alt="calendarIcon" />
                  Before 05/31/23
                </span>
                <span>
                  <img src={location} alt="calendarIcon" />
                  City
                </span>
              </div>
            </div>
            <div className={styles.requestBoxRight}>
              <img src={share} alt="share icon" />

              <Link to={"/donatedetails"}><img src={check} alt="check icon" /></Link>
            </div>
            <img className={styles.crossIcon} src={cross} alt="check icon" />
          </section>
        </div>
      </div>
    </>
  );
};

export default HomepageDonor;
