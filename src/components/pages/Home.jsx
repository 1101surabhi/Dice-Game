import React from "react";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const playClickHandler = () => {
    navigate("/game");
  };
  
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <img src="/dices.png" alt="dices" />
      <div className="flex flex-col">
        <h1 className="poppins-bold text-8xl h-[115px]">DICE GAME</h1>
        <Button white={false} onClick={playClickHandler} className="self-end">
          Play Now
        </Button>
      </div>
    </div>
  );
};

export default Home;
