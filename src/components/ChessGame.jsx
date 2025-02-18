import { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());

  const onDrop = (source, target) => {
    let move = game.move({ from: source, to: target, promotion: "q" });

    if (move === null) return false; 
    setGame(new Chess(game.fen()));
    return true;
  };

  return (
    <div className="min-h-screen m-24 flex flex-col items-center justify-center  text-white">
      
      <h2 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
        Chess AI Battle
      </h2>

    
      <div className="p-6 bg-white bg-opacity-10 backdrop-blur-md shadow-xl rounded-2xl border border-white/20">
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          boardWidth={400}
          customBoardStyle={{
            borderRadius: "12px",
            boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
          }}
        />
      </div>
    </div>
  );
};

export default ChessGame;
