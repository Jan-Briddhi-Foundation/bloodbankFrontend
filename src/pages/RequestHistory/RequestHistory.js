import styles from "../Notification/NotificationDonor.module.css";
import Header from "../../components/Header/Header";
import patient from "../../assets/patient.svg";
import info from "../../assets/Info.svg";
import cross from "../../assets/cross.svg";
// import { getNotifications } from "../../apis/Notifications.hooks";
import { useEffect, useState } from "react";
import { requestHistory } from "../../apis/BloodRequestHistory";
const RequestHistoryPage = () => {
  const [notifications, setNotifications] = useState([]);
  const getAllNotifications = async () =>{
    const data = await requestHistory();
    setNotifications(data);
  }
  useEffect(() => {getAllNotifications()}, []);
  useEffect(() => {console.log(notifications)});
  // console.log(notifications);
  return (
    <>
      <Header />
      <div className={styles.NotificationDonor}>
        <div className={styles.title}>
          <h1>Request History</h1>
          <span>Overview of all the requests you've submitted</span>
        </div>
        { notifications?.length === 0 ?
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
         :
         <div>
            No notifications yet

         </div>
        }
      </div>
    </>
  );
};

export default RequestHistoryPage;