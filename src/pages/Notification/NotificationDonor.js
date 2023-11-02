import styles from "./NotificationDonor.module.css";
import Header from "../../components/Header/Header";
import patient from "../../assets/patient.svg";
import info from "../../assets/Info.svg";
import cross from "../../assets/cross.svg";

const NotificationDonor = () => {
  return (
    <>
      <Header />
      <div className={styles.NotificationDonor}>
        <div className={styles.title}>
          <h1>Notifications</h1>
          <span>Discover who needs blood around you.</span>
        </div>
        <section className={styles.notifications}>
          <div className={styles.notificationBox}>
            <div className={styles.notificationBoxLeft}>
              <img src={patient} alt="patient Icon" />
              <div className={styles.notificationBoxMiddle}>
                <span>New Request in your Location</span>
                <div className={styles.notificationBoxMiddleBottom}>
                  <img src={info} alt="info icon" />
                  <span>Go to your Homepage to view the request.</span>
                </div>
              </div>
            </div>
            <div className={styles.notificationBoxRight}>
              <span>2 min ago</span>
              <img src={cross} alt="cross icon" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NotificationDonor;
