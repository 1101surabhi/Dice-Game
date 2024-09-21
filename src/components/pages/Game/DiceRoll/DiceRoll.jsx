import React, { useContext, useState } from "react";
import Button from "../../../UI/Button";
import Rules from "./Rules";
import scoreContext from "../../../context/score";

const DiceRoll = () => {
  const {
    score,
    setScore,
    userNumber,
    setUserNumber,
    showWarning,
    setShowWarning,
    isRolling,
    setIsRolling,
    showAlert,
    setShowAlert,
  } = useContext(scoreContext);

  const [diceNumber, setDiceNumber] = useState(1);
  const [tempDiceNumber, setTempDiceNumber] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const scoreCalculation = (finalDiceNumber) => {
    // console.log("userNumber after", userNumber)
    if (finalDiceNumber === userNumber) {
      setScore(score + finalDiceNumber);
      setShowAlert("right");
    } else if (finalDiceNumber !== userNumber && score > 0) {
      if (score - 2 > 0) {
        setScore(score - 2);
      } else setScore(0);
      setShowAlert("wrong");
    } else if (score === 0) {
      setShowAlert("wrong");
    }
    setUserNumber(0);

    setTimeout(() => {
      setShowAlert("");
    }, 2500);
  };

  const diceRollHandler = () => {
    if (isRolling) return;
    if (userNumber < 1) {
      setShowWarning(true);
      return;
    }
    setIsRolling(true);
    // console.log("userNumber b4" , userNumber)

    const rollInterval = setInterval(() => {
      let num = Math.floor(Math.random() * 6) + 1;
      setDiceNumber(num);
    }, 250);

    setTimeout(() => {
      clearInterval(rollInterval);
      const finalDiceNumber = Math.floor(Math.random() * 6) + 1;

      setTempDiceNumber(0);
      setDiceNumber(finalDiceNumber);

      setIsRolling(false);

      scoreCalculation(finalDiceNumber);
    }, 5000);
  };

  const showRulesHandler = () => {
    setShowRules(true);
    setFadeOut(false);

    setTimeout(() => {
      setFadeOut(true);
    }, 15000);

    setTimeout(() => {
      setShowRules(false);
    }, 17500);
  };

  const resetScoreHandler = () => {
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={`/dice_${tempDiceNumber ? tempDiceNumber : diceNumber}.png`}
        alt={`dice-${tempDiceNumber ? tempDiceNumber : diceNumber}`}
        className={`w-[200px] h-[200px] rounded-md ${
          isRolling ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={diceRollHandler}
        aria-disabled={isRolling}
      />
      <p className="text-lg poppins-medium mt-1 mb-4">Click on Dice to roll</p>
      <Button white={true} className="mb-4" onClick={resetScoreHandler}>
        Reset Score
      </Button>
      <Button white={false} onClick={showRulesHandler}>
        Show Rules
      </Button>
      {showRules && <Rules fadeOut={fadeOut} />}
    </div>
  );
};

export default DiceRoll;
