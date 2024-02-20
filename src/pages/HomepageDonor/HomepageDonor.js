import Header from "../../components/Header/Header";
import check from "../../assets/check.svg";
import share from "../../assets/share.svg";
import cross from "../../assets/cross.svg";
import calendar from "../../assets/calendar.svg";
import location from "../../assets/location.svg";

import { useEffect, useState, useRef } from "react";
import { donorRequest } from "../../apis/DonorRequest";
import { PatientRedirect } from "../../apis/LoggedInProfileType";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import copy from "copy-to-clipboard";

const HomepageDonor = () => {
  // (async () => await PatientRedirect())();
  const redirect = useNavigate();
  const textRef = useRef();

  const [login, setLogin] = useState(
    false || localStorage.getItem("bloodBankAuthToken")
  );

  const copyToClipboard = () => {
    let copyText = textRef.current.value;
    let isCopy = copy(copyText);

    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };

  const [bloodRequests, setbloodRequests] = useState([]);
  const getAllRequests = async () => {
    const data = await donorRequest();
    setbloodRequests(data);
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
              Donate Blood
            </h1>
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              Each donation can help save up to 3 lives!
            </p>
          </div>
          {bloodRequests?.blood_requests?.length ? (
            bloodRequests.blood_requests.map((request, index) => (
              <div key={index} className="bg-[#f7f7f7] mb-8 rounded-lg">
                <div className="grid grid-cols-[1fr,auto] gap-4 p-6 max-[390px]:p-3">
                  <p className="text-2xl font-medium max-[390px]:text-xl">
                    Blood Request: Type {request.profile.bloodGroup}
                  </p>
                  <img
                    className="justify-self-end"
                    src={cross}
                    alt="check icon"
                  />

                  <div className="grid grid-cols-2 w-fit items-center gap-2">
                    <p className="flex items-center gap-1">
                      <img
                        className="w-8 max-[390px]:w-7"
                        src={calendar}
                        alt="calendarIcon"
                      />
                      Before {request.date_needed}
                    </p>
                    <p className="flex items-center gap-1">
                      <img
                        className="w-8 max-[390px]:w-7"
                        src={location}
                        alt="locationIcon"
                      />
                      {request.profile.city}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      value="https://floatingbloodbank.com/"
                      hidden
                      type="text"
                      ref={textRef}
                    />
                    <button onClick={copyToClipboard}>
                      <img
                        src={share}
                        alt="share icon"
                        className="w-11 max-[390px]:w-8"
                      />
                    </button>

                    <button
                      onClick={() => {
                        console.log(login);
                        login
                          ? redirect("/donationcriteria")
                          : redirect("/login");
                      }}
                    >
                      <img
                        className="w-11 max-[390px]:w-8"
                        src={check}
                        alt="check icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p className="text-3xl text-center">No bloodrequests yet</p>
            </div>
          )}
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default HomepageDonor;
