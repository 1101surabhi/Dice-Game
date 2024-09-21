import React, { useState } from "react";
import Header from "./Header/Header";
import DiceRoll from "./DiceRoll/DiceRoll";
import scoreContext from "../../context/score";
import Alert from "../../UI/Alert";

const Game = () => {
  const [score, setScore] = useState(0);
  const [userNumber, setUserNumber] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [showAlert, setShowAlert] = useState('')

  return (
    <scoreContext.Provider
      value={{
        score,
        setScore,
        userNumber,
        setUserNumber,
        showWarning,
        setShowWarning,
        isRolling,
        setIsRolling,
        showAlert,
        setShowAlert
      }}
    >
      <div className="w-full mt-8">
        {showAlert === 'wrong' && <Alert wrong={true} />}
        {showAlert === 'right' && <Alert wrong={false} />}
        <Header />
        <DiceRoll />
      </div>
    </scoreContext.Provider>
  );
};

export default Game;
