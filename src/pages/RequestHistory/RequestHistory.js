import styles from "../Notification/NotificationDonor.module.css";
import Header from "../../components/Header/Header";
import share from "../../assets/share.svg";
import cross from "../../assets/cross.svg";
import calendar from "../../assets/calendar.svg";
import location from "../../assets/location.svg";
// import { getNotifications } from "../../apis/Notifications.hooks";
import { useEffect, useState } from "react";
import { requestHistory } from "../../apis/BloodRequestHistory";
import { DonorRedirect } from "../../apis/LoggedInProfileType";

const RequestHistoryPage = () => {
  (async () => {
    const result = await DonorRedirect();
  })();

  const [notifications, setNotifications] = useState([]);
  const getAllRequests = async () => {
    const data = await requestHistory();
    setNotifications(data);
  };

  useEffect(() => {
    getAllRequests();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.NotificationDonor}>
        <div className={styles.title}>
          <h1>Request History</h1>
          <span>Overview of all the requests you've submitted</span>
        </div>
        {notifications.history ? (
          notifications.history.map((request, index) => (
            <div
              key={index}
              className="mt-4 flex flex-col gap-2 w-[100%] p-4  md:w-[60vw]"
            >
              <section className="relative rounded-[5px] pl-[2vh] pr-[4vh] py-[2vh] flex justify-between h-[12vh] bg-[rgba(249,_249,_249,_1)] w-[100%]">
                <div className="w-[full] flex flex-col justify-between gap-2 text-left">
                  <span>
                    Blood Request: Type {notifications.profileForm.bloodGroup}
                  </span>
                  <div className="flex gap-[2rem]">
                    <span className="flex gap-1 items-center text-xs">
                      <img
                        className="w-[1rem] h-[1rem]"
                        src={calendar}
                        alt="calendarIcon"
                      />
                      Before {request.date_needed}
                    </span>
                    <span className="flex gap-1 items-center text-xs">
                      <img
                        className="w-[1rem] h-[1rem]"
                        src={location}
                        alt="calendarIcon"
                      />
                      Hospital
                    </span>
                  </div>
                </div>
                <div className="flex  self-start items-center">
                  <img
                    src={share}
                    alt="share icon"
                    className="h-[3.125rem] w-[1.875rem] relative -bottom-[0.85rem] -right-[0.85rem]"
                  />
                </div>
                <img
                  className="absolute right-[3.5%] top-[3%] cursor-pointer"
                  src={cross}
                  alt="check icon"
                />
              </section>
            </div>
          ))
        ) : (
          <div>No history yet</div>
        )}
      </div>
    </>
  );
};

export default RequestHistoryPage;
