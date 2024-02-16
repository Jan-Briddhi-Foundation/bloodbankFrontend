// import styles from "../Notification/NotificationDonor.module.css";
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
  (async () => await DonorRedirect())();

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

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
              Request History
            </h1>
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              Overview of all the requests you've submitted
            </p>
          </div>
          {notifications?.history?.length ? (
            notifications.history.map((request, index) => (
              <div key={index} className="bg-[#f7f7f7] mb-8">
                <div className="grid grid-cols-[1fr,auto] gap-4 p-6">
                  <p className="text-2xl font-normal max-[350px]:text-1xl">
                    Blood Request: Type {notifications.profileForm.bloodGroup}
                  </p>
                  <img className="" src={cross} alt="delete icon" />

                  <div className="flex items-center gap-2">
                    <p className="flex items-center gap-1">
                      <img className="w-8" src={calendar} alt="calendarIcon" />
                      Before {request.date_needed}
                    </p>
                    <p className="flex items-center gap-1">
                      <img className="w-8" src={location} alt="calendarIcon" />
                      Hospital
                    </p>
                  </div>
                  <img src={share} alt="share icon" className="w-11" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-3xl text-center">No history yet</div>
          )}
        </div>
      </section>
    </>
  );
};

export default RequestHistoryPage;
