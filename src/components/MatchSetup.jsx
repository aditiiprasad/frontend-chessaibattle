import { useState } from "react";

const MatchSetup = ({ startGame }) => {
  const [bet, setBet] = useState(0);
  const [aiModel, setAiModel] = useState("Stockfish");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Card */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-96 text-center border border-white/20">
        <h2 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          Match Setup
        </h2>

        {/* AI Model Selection */}
        <label className="text-lg text-gray-300 mb-2 block">Choose AI Model:</label>
        <select
          value={aiModel}
          onChange={(e) => setAiModel(e.target.value)}
          className="w-full p-3 rounded-lg bg-black bg-opacity-20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="Stockfish">Stockfish</option>
          <option value="RL-Agent">RL-Based AI</option>
        </select>

        {/* Bet Amount */}
        <label className="text-lg text-gray-300 mt-4 mb-2 block">Enter Bet Amount:</label>
        <input
          type="number"
          className="w-full p-3 rounded-lg bg-black bg-opacity-20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          value={bet}
          onChange={(e) => setBet(e.target.value)}
          min="1"
        />

        {/* Start  */}
        <button
          onClick={() => startGame(aiModel, bet)}
          className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Start Game ♟️
        </button>
      </div>
    </div>
  );
};

export default MatchSetup;
