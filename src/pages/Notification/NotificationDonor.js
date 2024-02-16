import Header from "../../components/Header/Header";
import patient from "../../assets/patient.svg";
import info from "../../assets/Info.svg";
import cross from "../../assets/cross.svg";
import { useEffect, useState } from "react";
import { getNotifications } from "../../apis/Notifications.hooks";
import { CheckAuth } from "../../apis/LoggedInProfileType";

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

      <section className="px-11 max-[540px]:px-4">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
              Notifications
            </h1>
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              {authType === "patient"
                ? "Discover who needs blood around you."
                : "Discover who is a match with you."}
            </p>
          </div>
          {notifications?.requests?.length ? (
            notifications.requests.map((request, index) => (
              <article key={index} className="bg-[#f7f7f7] mb-8 rounded-lg">
                <div className="grid grid-cols-[auto,1fr,auto] items-center gap-12 p-6 max-[540px]:grid-cols-[auto,1fr] max-[540px]:gap-4 max-[540px]:p-4">
                  <img
                    className="max-[540px]:w-18"
                    src={patient}
                    alt="patient Icon"
                  />

                  <div className="flex flex-col gap-4 text-2xl max-[540px]:text-xl max-[540px]:gap-2 max-[540px]:row-start-2 max-[540px]:col-start-1 max-[540px]:col-span-2">
                    <h2 className="text-3xl font-medium max-[540px]:text-2xl">
                      {authType === "patient"
                        ? "New Request in your Location"
                        : "You have a blood match!"}
                    </h2>

                    <p className="flex items-center gap-4 text-[#99999999]">
                      <img className="w-8 " src={info} alt="info icon" />
                      {authType === "patient"
                        ? "Go to your Homepage to view the request."
                        : "Contact your doctor/ hopsital for more information."}
                    </p>
                  </div>
                  <p className="flex items-center gap-4 text-xl max-[540px]:row-start-1 max-[540px]:col-start-2 max-[540px]:justify-self-end">
                    <span>{calculateTimeDifference(request.date_created)}</span>
                    <img
                      className="cursor-pointer"
                      src={cross}
                      alt="cross icon"
                    />
                  </p>
                </div>
              </article>
            ))
          ) : (
            <div>
              <p className="text-3xl text-center">No notifications yet</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NotificationDonor;
