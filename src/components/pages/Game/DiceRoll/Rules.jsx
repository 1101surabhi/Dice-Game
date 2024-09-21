import React from "react";
import styles from "./Rules.module.css";

const Rules = ({ fadeOut }) => {
  return (
    <div
      className={`bg-[#f7d8d8] px-5 py-5 w-[450px] absolute top-2/3 left-2/3 ${
        fadeOut ? styles["rules-fade-out"] : styles.rules
      }`}
    >
      <h3 className="poppins-bold text-lg mb-4">How to play dice game</h3>
      <ul className="list-decimal px-5">
        <li className="poppins-medium text-sm mb-1">Select any number.</li>
        <li className="poppins-medium text-sm mb-1">Click on dice image.</li>
        <li className="poppins-medium text-sm mb-1">
          After click on dice if selected number is equal to dice number you
          will get same point as dice.
        </li>
        <li className="poppins-medium text-sm">
          If you get wrong guess then 2 point will be deducted.
        </li>
      </ul>
    </div>
  );
};

export default Rules;
