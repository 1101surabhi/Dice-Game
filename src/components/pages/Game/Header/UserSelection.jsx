import React, { useContext } from "react";
import DiceNumber from "./DiceNumber";
import scoreContext from "../../../context/score";

const UserSelection = () => {
  const ctx = useContext(scoreContext);
  const possibleNumbers = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col gap-3">
      {ctx.showWarning && (
        <p className="text-[#FF0C0C] poppins-regular text-lg self-end">
          You have not selected any number
        </p>
      )}
      <div className="flex gap-6">
        {possibleNumbers.map((num) => (
          <DiceNumber
            onClick={() => {
              ctx.setUserNumber(num);
              ctx.setShowWarning(false)
            }}
            key={num}
          >
            {num}
          </DiceNumber>
        ))}
      </div>
      <p className="poppins-bold text-lg self-end">Select Number</p>
    </div>
  );
};

export default UserSelection;
