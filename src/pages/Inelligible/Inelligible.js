import Header from "../../components/Header/Header";
import love from "./love.png";
import React from "react";
import { PatientRedirect } from "../../apis/LoggedInProfileType";

function Inelligible() {
  (async () => await PatientRedirect())();

  return (
    <>
      <Header />

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-6xl text-[#222222] mb-6 font-bold max-[410px]:text-5xl">
              Not Eligible
            </h1>
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              At this time, you are not eligible to donate blood. Contact your
              doctor for more informations. Thanks for trying!.
            </p>
          </div>

          <img
            src={love}
            alt=""
            className="max-w-2xl self-center mb-8 max-[490px]:max-w-md"
          ></img>

          <p className="self-center">
            <a
              href="/"
              className="text-[#ba595f] text-3xl max-[410px]:text-2xl mb-6 underline underline-offset-2"
            >
              Read more about who can donate blood
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Inelligible;
