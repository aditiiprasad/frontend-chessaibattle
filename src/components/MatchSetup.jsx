import { useState } from "react";

const MatchSetup = ({ startGame }) => {
  const [bet, setBet] = useState(0);
  const [aiModel, setAiModel] = useState("Stockfish");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-white">
      {/* Card */}
      <div className="max-w-6xl mx-auto bg-[#3E2723] bg-opacity-80 backdrop-blur-md shadow-2xl shadow-lg rounded-2xl p-8 text-center border border-white/20">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#CFAF50]">
          Match Setup
        </h2>

        {/* AI Model Selection */}
        <label className="text-lg text-[#D7CCC8] mb-2 block">Choose AI Model:</label>
        <select
          value={aiModel}
          onChange={(e) => setAiModel(e.target.value)}
          className="w-full p-3 rounded-lg bg-[#3E2723] bg-opacity-50 border border-[#8D6E63] text-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#CFAF50]"
        >
          <option value="Stockfish">Stockfish</option>
          <option value="RL-Agent">RL-Based AI</option>
        </select>

        {/* Bet Amount */}
        <label className="text-lg text-[#D7CCC8] mt-4 mb-2 block">Enter Bet Amount:</label>
        <input
          type="number"
          className="w-full p-3 rounded-lg bg-[#3E2723] bg-opacity-50 border border-[#8D6E63] text-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#CFAF50]"
          value={bet}
          onChange={(e) => setBet(e.target.value)}
          min="1"
        />

        {/* Start Button */}
        <button
          onClick={() => startGame(aiModel, bet)}
          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#FFD54F] to-[#FFB300] text-black font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Start Game ♟️
        </button>
      </div>
    </div>
  );
};

export default MatchSetup;
