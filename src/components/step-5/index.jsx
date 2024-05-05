import React from "react";
import style from "./step5.module.css";
import thanksIcon from "../../assets/images/icon-thank-you.svg";

const Step5 = () => {
  return (
    <div className={style.main}>
      <img src={thanksIcon} alt="" className={style.icon} />
      <h1 className={style.title}>Thank you!</h1>
      <p className={style.subtitle}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support,please feel free to email us
        seidvahidli@gmail.com
      </p>
    </div>
  );
};

export default Step5;
