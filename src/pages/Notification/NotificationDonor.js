// import styles from "./NotificationDonor.module.css";
import Header from "../../components/Header/Header";
import patient from "../../assets/patient.svg";
import info from "../../assets/Info.svg";
import cross from "../../assets/cross.svg";
import { useEffect, useState } from "react";
import { getNotifications } from "../../apis/Notifications.hooks";
import { CheckAuth, LogInStatus } from "../../apis/LoggedInProfileType";

const NotificationDonor = () => {
  const [notifications, setNotifications] = useState([]);
  const [authType, setAuthType] = useState("");

  const checkStatus = async () => {
    const result = await CheckAuth();
    setAuthType(result);
  };

  const getAllNotifications = async () => {
    const data = await getNotifications();
    setNotifications(data);
  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  const calculateTimeDifference = (startDate) => {
    const start = new Date(startDate);
    const end = new Date();
    const diffInMs = Math.abs(end - start);
    const diffInSeconds = Math.floor(diffInMs / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const diffInHours = Math.floor(diffInSeconds / 3600);
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 604800) {
      const diffInDays = Math.floor(diffInSeconds / 86400);
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    } else {
      const diffInWeeks = Math.floor(diffInSeconds / 604800);
      const remainingDays = Math.floor((diffInSeconds % 604800) / 86400);
      return `${diffInWeeks} week${
        diffInWeeks > 1 ? "s" : ""
      } ${remainingDays} day${remainingDays > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-[5vh] text-center">
        <div>
          <h1 className="font-[Roboto] text-[2.5rem] font-bold  mb-[3vh]">
            Notifications
          </h1>
          <span>Discover who needs blood around you.</span>
        </div>
        {notifications.requests ? (
          notifications.requests.map((request, index) => (
            <section
              key={index}
              className="mt-4 flex flex-col   w-[100%] md:w-[39rem]"
            >
              <div className="flex items-center justify-between bg-[rgba(249,_249,_249,_1)] rounded-[5px] p-2 m-4">
                <div className="w-[full] md:flex-row flex flex-col justify-between items-center gap-1 md:gap-4">
                  <img className="w-[auto]" src={patient} alt="patient Icon" />
                  <div className="flex flex-col  text-left md:gap-2">
                    <span className="font-[Roboto]  font-semibold text-[rgba(70,_74,_87,_1)]">
                      {authType === "patient"
                        ? "New Request in your Location"
                        : "You have a blood match!"}
                    </span>
                    <div className="flex items-center gap-1">
                      <img
                        className="w-[1.5rem] md:w-[auto]"
                        src={info}
                        alt="info icon"
                      />
                      <span className="font-[Roboto] text-xs text-[rgba(99,_99,_99,_1)]">
                        {authType === "patient"
                          ? "Go to your Homepage to view the request."
                          : "Contact your doctor/hopsital for more information."}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex md:gap-2 items-center font-[Roboto] text-xs md:text-[1rem] text-[rgba(99,_99,_99,_1)]">
                  <span>{calculateTimeDifference(request.date_created)}</span>
                  <img
                    className="w-[1rem] cursor-pointer"
                    src={cross}
                    alt="cross icon"
                  />
                </div>
              </div>
            </section>
          ))
        ) : (
          <div>No notifications yet</div>
        )}
      </div>
    </>
  );
};

export default NotificationDonor;
