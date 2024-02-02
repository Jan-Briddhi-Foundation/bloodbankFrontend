import Header from "../../components/Header/Header";
// import style from "./yourInfo.module.css";
import NextIcon from "../../assets/CaretCircleRight.svg";
import React from "react";
import { Link } from "react-router-dom";
import { getProfileDetails } from "../../apis/Profile";
import { useEffect, useState } from "react";

function YourInfo() {
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

  const firstClass =
    "relative rounded-[8px] bg-[#f9f9f9] opacity-100 w-full min-h-[5rem] pl-4 border-[1px] border-[solid] border-[#BA595F]";

  return details ? (
    <div>
      <Header />
      <div>
        <h1 className="text-center  mx-[0] my-[1.5em] text-2xl">
          Your information
        </h1>
        <section className="flex flex-col md:grid md:grid-cols-[repeat(2,_1fr)] w-4/5 gap-4 justify-center mx-[auto] my-[0] text-[1.5rem]">
          <input
            type="text"
            name="firstName"
            className={firstClass}
            value={firstName(details.userForm.name)}
            readOnly
          />
          <input
            type="text"
            name="lastName"
            className={firstClass}
            value={lastName(details.userForm.name)}
            readOnly
          />
          <input
            type="text"
            name="phone"
            className={firstClass}
            value={details.userForm.phone}
            readOnly
          />
          <input
            type="text"
            name="gmail"
            className={firstClass}
            value={details.userForm.email}
            readOnly
          />

          <input
            type="text"
            name="bloodType"
            className={firstClass}
            value={details.profileForm.bloodGroup}
            readOnly
          />
        </section>
      </div>
      <div className="flex justify-end">
        <Link to="/thankyou">
          <img
            src={NextIcon}
            alt=""
            className="mt-4 w-[5rem] pr-6 flex justify-end"
          />{" "}
        </Link>
      </div>
    </div>
  ) : (
    <>
      <Header />
      <center>
        <h1>
          <b>Loading...</b>
        </h1>
      </center>
    </>
  );
}

export default YourInfo;
