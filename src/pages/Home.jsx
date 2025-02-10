import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      {/*  Card */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-96 text-center border border-white/20">
        <h1 className="text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
          Chess AI Battle
        </h1>
        <p className="text-gray-300 text-sm mb-6">
          Bet on AI-powered chess matches and watch them battle in real-time!
        </p>

        {/*  Start match */}
        <Link
          to="/battle"
          className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Start a Match ♟️
        </Link>
      </div>
    </div>
  );
};

export default Home;
