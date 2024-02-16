import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { PatientRedirect } from "../../apis/LoggedInProfileType";

const FindBloodBank = () => {
  (async () => await PatientRedirect())();

  return (
    <>
      <Header />

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
              Find Blood Bank
            </h1>
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              Find blood banks near your location.
            </p>
          </div>
          <Link to="/donationconsent">
            <p className="text-3xl">Next</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default FindBloodBank;
