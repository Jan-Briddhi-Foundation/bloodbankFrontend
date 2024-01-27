import Header from "../../components/Header/Header";
// import style from "./yourInfo.module.css";
import NextIcon from "../../assets/CaretCircleRight.svg";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

function yourInfo() {
  const firstClass =
    "relative rounded-[8px] bg-[#f9f9f9] opacity-100 w-full min-h-[5rem] pl-4 border-[1px] border-[solid] border-[#BA595F]";

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center  mx-[0] my-[1.5em] text-2xl">
          Your information
        </h1>
        <section className="flex flex-col md:grid md:grid-cols-[repeat(2,_1fr)] w-4/5 gap-4 justify-center mx-[auto] my-[0] text-[1.5rem]">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className={firstClass}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className={firstClass}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            className={firstClass}
            required
          />
          <input
            type="Email"
            placeholder="Email"
            name="gmail"
            className={firstClass}
            required
          />
          <div
            className={`${"flex flex-col justify-center relative h-28"} ${firstClass} `}
          >
            <select
              name="bloodType"
              placeholder="Blood Type"
              className={` ${"border-[none] appearance-none w-auto min-h-[5rem] bg-[#f9f9f9] m-4 p-4 text-[1.5rem] outline-[none]"}`}
            >
              <option value="" selected>
                Blood Type
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>
            <div>
              <ArrowDropDownIcon
                className="absolute flex right-[0.8rem] top-2/4 -translate-y-1/2 items-center justify-center pointer-events-none text-[#BA595F] h-80"
                sx={{ fontSize: 50 }}
              />
            </div>
          </div>
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
  );
}
export default yourInfo;
