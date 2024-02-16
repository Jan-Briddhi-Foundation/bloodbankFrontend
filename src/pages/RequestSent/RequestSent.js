import Header from "../../components/Header/Header";
import requestImg from "../../assets/RequestSent.svg";
import React from "react";
import { DonorRedirect } from "../../apis/LoggedInProfileType";

function RequestSent() {
  (async () => await DonorRedirect())();

  return (
    <>
      <Header />

      <section className="px-11 max-[410px]:px-6">
        <div className="my-16 flex flex-col max-w-screen-lg mx-auto flex flex-col">
          <div className="mb-12 text-center">
            <h1 className="text-6xl text-[#222222] mb-8 font-bold max-[410px]:text-4xl">
              Your request was sent
            </h1>
            <p className="text-[#6b6b6b] text-3xl mb-9 max-[410px]:text-2xl">
              Now you just have to wait for someone to match your blood request.
            </p>
          </div>

          <img
            src={requestImg}
            alt=""
            className="max-w-2xl self-center mb-8 max-[490px]:max-w-md"
          />

          <p className="self-center">
            <a
              className="text-[#ba595f] text-3xl max-[410px]:text-2xl mb-6 underline underline-offset-2"
              href="/patient"
            >
              Back to Homepage
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default RequestSent;
