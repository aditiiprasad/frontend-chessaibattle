import { Link } from "react-router-dom";

const PreviousMatches = () => {
  return (
    <div className="h-screen py-12 px-6 bg-gradient-to-br from-[#5B3A29] to-[#8B6F47] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-6 text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#CFAF50]">
          Previous Matches
        </h1>

        {/* Description */}
        <p className="text-lg text-[#D7CCC8] mb-8 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eaque provident, voluptas ut minima neque esse ratione molestiae consectetur, reiciendis sed reprehenderit non sit laudantium, atque perferendis excepturi! Aut, totam?
        </p>

        {/* Stats Button */}
        <div className="flex justify-center md:justify-start">
          <Link
            to="/stats"
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#FFB300] text-black font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl text-center"
          >
            View Stats 📊
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviousMatches;
