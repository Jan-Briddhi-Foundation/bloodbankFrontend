import Header from "../../components/Header/Header";
import NextIcon from "../../assets/CaretCircleRight.svg";
import React from "react";
import { Link } from "react-router-dom";
import { getProfileDetails } from "../../apis/Profile";
import { useEffect, useState } from "react";
import { PatientRedirect } from "../../apis/LoggedInProfileType";

function YourInfo() {
  (async () => await PatientRedirect())();

  const [details, setDetails] = useState();
  const firstName = (nameString) => nameString.split(" ")[0];
  const lastName = (nameString) => nameString.split(" ")[1];

  const profileDetailget = async () => {
    const result = await getProfileDetails();
    setDetails(result);
  };

  useEffect(() => {
    profileDetailget();
  }, [profileDetailget]);

  const inputStyle =
    "bg-[#f9f9f9] w-full text-3xl mb-6 py-5 px-6 rounded-lg max-[410px]:text-2xl border-[1px] border-[solid] border-[#BA595F]";

  return (
    <>
      <Header />

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
              Your Information
            </h1>
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              This form is used to prove that you agreed to donate blood, if you
              do please click next
            </p>
          </div>

          {details ? (
            <form className=" flex flex-col">
              <input
                type="text"
                name="firstName"
                placeholder="first Name"
                className={inputStyle}
                value={firstName(details.userForm.name)}
                readOnly
              />
              <input
                type="text"
                name="lastName"
                placeholder="last Name"
                className={inputStyle}
                value={lastName(details.userForm.name)}
                readOnly
              />
              <input
                type="text"
                name="phone"
                placeholder="phone"
                className={inputStyle}
                value={details.userForm.phone}
                readOnly
              />
              <input
                type="text"
                name="gmail"
                placeholder="email"
                className={inputStyle}
                value={details.userForm.email}
                readOnly
              />

              <input
                type="text"
                name="bloodType"
                placeholder="Blood Type"
                className={inputStyle}
                value={details.profileForm.bloodGroup}
                readOnly
              />

              <button className="justify-self-end self-end mt-16">
                <Link to="/thankyou">
                  <img
                    src={NextIcon}
                    alt=""
                    className="w-28 max-[410px]:w-16"
                  />
                </Link>
              </button>
            </form>
          ) : (
            <p className="text-3xl text-center">Loading...</p>
          )}
        </div>
      </section>
    </>
  );
}

export default YourInfo;
