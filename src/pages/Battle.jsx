import { useState } from "react";
import ChessGame from "../components/ChessGame";
import MatchSetup from "../components/MatchSetup";
import Header from "../components/Header";

const Battle = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [betAmount, setBetAmount] = useState(0);

  const startGame = (model, bet) => {
    setSelectedModel(model);
    setBetAmount(bet);
    setGameStarted(true);
  };

  return (
    <div>
      <Header/>
    <div className="min-h-screen bg-gradient-to-br  from-black to-amber-950 text-white flex items-center justify-center">
      {!gameStarted ? (
        <MatchSetup startGame={startGame} />
      ) : (
        <div className="transition-opacity duration-500 ease-in-out">
          <ChessGame />
        </div>
      )}
    </div>
    </div>
  );
};

export default Battle;
