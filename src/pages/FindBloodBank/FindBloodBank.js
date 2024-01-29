import React from "react";
import Header from "../../components/Header/Header";
// import "./DonorCriteria.css";
// import { MapPage } from "../../components/Map/Map";
import { Link } from "react-router-dom";

const FindBloodBank = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col my-[0] text-[var(--font-size-base)] font-[var(--font-roboto)] p-4 gap-4">
        <div>
          <p className="text-center text-[#000] font-[Roboto] text-[2.1875rem] not-italic font-bold leading-[1.875rem] mx-[0] my-4">
            Find Blood Bank
          </p>
          <p className="text-[irem] font-[Roboto] text-[#6b6b6b] text-center">
            {" "}
            Find blood banks near your location.{" "}
          </p>
        </div>
        <Link to="/yourinfo">Next</Link>
      </div>
    </>
  );
};

export default FindBloodBank;
