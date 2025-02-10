import { Link } from "react-router-dom";

const StartNewMatch = () => {
  return (
    <div className="flex m-2 flex-col items-center justify-center w-full max-w-3xl p-10 bg-[#3E2723] bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl border border-[#5D4037]">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#CFAF50] text-center">
        Chess AI Battle
      </h1>

      {/* Description */}
      <p className="text-lg text-[#D7CCC8] text-center mb-8">
        Bet on AI-powered chess matches and watch them battle in real-time!
      </p>

      {/* Start Match Button */}
      <Link
        to="/battle"
        className="w-full py-3 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#FFB300] text-black font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl text-center"
      >
        Start a Match ♟️
      </Link>
    </div>
  );
};

export default StartNewMatch;
