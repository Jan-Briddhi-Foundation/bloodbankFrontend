import Header from "../../components/Header/Header";
import thanks from "../../assets/thank you 1.svg";

import React from "react";
import style from "./ThankYou.module.css";

function ThankYou() {
  return (
    <>
      <Header />
      <div className={style.body}>
        <h1 className={style.title}>Thank you!</h1>
        <div className={style.imgContainer}>
          <img src={thanks} alt="" className={style.img}></img>
        </div>
        <div className={style.note}>
          <p className={style.note}>
            You just helped 3 persons in need, it means alot to them and us.
          </p>
          <p className={style.note2}>
            After the donation, be sure to get yourself some rest to let your
            body regenerate.
          </p>
        </div>
        <a href="/donor" className={style.link}>
          Back to Homepage
        </a>
      </div>
    </>
  );
}

export default ThankYou;
