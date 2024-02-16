import Header from "../../components/Header/Header";
import thanks from "../../assets/thank you 1.svg";
import React from "react";
import { PatientRedirect } from "../../apis/LoggedInProfileType";

function ThankYou() {
  (async () => await PatientRedirect())();
  return (
    <>
      <Header />

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto flex flex-col">
          <div className="mb-12 text-center">
            <h1 className="text-6xl text-[#222222] mb-8 font-bold max-[410px]:text-4xl">
              Thank you!
            </h1>
          </div>

          <img
            src={thanks}
            alt=""
            className="max-w-2xl self-center mb-8 max-[490px]:max-w-md"
          ></img>

          <div className="mb-12 text-center">
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              You just helped 3 persons in need, it means alot to them and us.
              <br /> After the donation, be sure to get yourself some rest to
              let your body regenerate.
            </p>

            <p className="self-center mt-12">
              <a
                className="text-[#ba595f] text-3xl max-[410px]:text-2xl mb-6 underline underline-offset-2"
                href="/donor"
              >
                Back to Homepage
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ThankYou;
