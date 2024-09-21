import React from "react";

const Button = (props) => {
  const { white } = props;
  const classes =
    "rounded-md w-[220px] h-[44px] poppins-semibold text-base justify-center px-[18px] py-[10px]";
  let className = white
    ? classes + " border border-black text-black"
    : classes + " text-white bg-black";
  return (
    <button className={`${className} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
