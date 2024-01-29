// import styles from "./NotificationDonor.module.css";
import Header from "../../components/Header/Header";
import patient from "../../assets/patient.svg";
import info from "../../assets/Info.svg";
import cross from "../../assets/cross.svg";
import { getNotifications } from "../../apis/Notifications.hooks";
import { useEffect, useState } from "react";
const NotificationDonor = () => {
  const [notifications, setNotifications] = useState([]);
  const getAllNotifications = async () => {
    const data = await getNotifications();
    setNotifications(data);
  };
  useEffect(() => {
    getAllNotifications();
  }, []);
  useEffect(() => {
    console.log(notifications);
  });
  console.log(notifications);
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
        {notifications?.length === 0 ? (
          <section className="mt-4 flex flex-col   w-[100%] md:w-[39rem]">
            <div className="flex items-center justify-between bg-[rgba(249,_249,_249,_1)] rounded-[5px] p-2 m-4">
              <div className="w-[full] md:flex-row flex flex-col justify-between items-center gap-1 md:gap-4">
                <img className="w-[auto]" src={patient} alt="patient Icon" />
                <div className="flex flex-col  text-left md:gap-2">
                  <span className="font-[Roboto]  font-semibold text-[rgba(70,_74,_87,_1)]">
                    New Request in your Location
                  </span>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-[1.5rem] md:w-[auto]"
                      src={info}
                      alt="info icon"
                    />
                    <span className="font-[Roboto] text-xs text-[rgba(99,_99,_99,_1)]">
                      Go to your Homepage to view the request.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex md:gap-2 items-center font-[Roboto] text-xs md:text-[1rem] text-[rgba(99,_99,_99,_1)]">
                <span>2 min ago</span>
                <img
                  className="w-[1rem] cursor-pointer"
                  src={cross}
                  alt="cross icon"
                />
              </div>
            </div>
          </section>
        ) : (
          <div>No notifications yet</div>
        )}
      </div>
    </>
  );
};

export default NotificationDonor;
