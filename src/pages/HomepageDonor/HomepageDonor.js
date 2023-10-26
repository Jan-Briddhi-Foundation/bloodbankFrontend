import styles from "./HomepageDonor.module.css";
import Header from "../../components/Header/Header";
const HomepageDonor = () => {
  return (
    <>
      <Header />
      <div className={styles.homepageDonor}>
        <div className={styles.title}>
          <h1>Donate Blood</h1>
          <span>Each donation can help save up to 3 lives!</span>
        </div>
        <div className={styles.requests}></div>
      </div>
    </>
  );
};

export default HomepageDonor;
