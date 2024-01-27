import Header from "../../components/Header/Header";
// import thanks from '../../assets/thank you 1.svg';
import love from "./love.png";

import React from "react";
// import style from "./Inelligible.module.css";

function Inelligible() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center mx-4 my-[0]">
        <h1 className="m-8 font-semibold">Not Eligible</h1>
        <p className="text-[#6B6B6B]  mx-[0] my-4">
          At this time, you are not eligible to donate blood. Contact your
          doctor for more informations. Thanks for trying!.
        </p>
        <div className="mx-[0] my-4">
          <img
            src={love}
            alt=""
            className="w-[15rem] md:w-[20rem] h-[auto]"
          ></img>
        </div>
        <div className="text-[#6B6B6B] leading-[0.4] text-center mx-[0] my-2"></div>
        <a
          href="/"
          className="mx-[0] my-8 font-medium text-[23px] underline tracking-[0.02em] font-[Roboto] text-[#ba595f] text-center block"
        >
          Read more about who can donate blood
        </a>
      </div>
    </>
  );
}

export default Inelligible;
