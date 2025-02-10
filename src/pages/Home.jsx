import { Link } from "react-router-dom";
import StartNewMatch from "../components/StartNewMatch";
import PreviousMatches from "../components/PreviousMatches";
import Header from "../components/Header";

const Home = () => {
  return (
    <div >
      
<Header/>

    <div className="min-h-screen  flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-black to-amber-950 text-white p-6">
      {/*  Start a Match */}
      <StartNewMatch />

      {/* Previous Matches Stats */}
      <PreviousMatches />
    </div>
    </div>
  );
};

export default Home;
