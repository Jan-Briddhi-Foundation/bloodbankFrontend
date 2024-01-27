import Header from "../../components/Header/Header";
import requestImg from "../../assets/RequestSent.svg";
// import style from "./RequestSent.module.css";
import React from "react";

function RequestSent() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center font-[Roboto] p-4">
        <h1 className="relative text-3xl block text-[#000] text-center mx-[0] my-8">
          Your request was sent
        </h1>
        <p className="mx-[0] my-[0.8rem] text-[1rem] text-wrap text-[#6b6b6b] text-center inline-block">
          <span>All set! </span>Now you just have to wait for someone to match
          your blood request.
        </p>
        <div className="mx-[0] my-[1.2rem]">
          <img src={requestImg} alt="" className="w-[15rem] h-[auto]" />
        </div>
        <p>
          <a href="/">Back to Homepage</a>
        </p>
      </main>
    </div>
  );
}

export default RequestSent;
