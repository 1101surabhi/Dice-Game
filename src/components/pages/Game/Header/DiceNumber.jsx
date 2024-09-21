import React, { useContext } from "react";
import scoreContext from "../../../context/score";

const DiceNumber = (props) => {
  const ctx = useContext(scoreContext);
  return (
    <button
      className={`w-14 h-14 border border-black flex justify-center items-center hover:bg-[#f7d8d8] ${
        props.children === ctx.userNumber ? "bg-[#f7d8d8]" : ""
      }`}
      onClick={props.onClick}
      disabled={ctx.isRolling}
    >
      <p className="poppins-bold text-2xl">{props.children}</p>
    </button>
  );
};

export default DiceNumber;
