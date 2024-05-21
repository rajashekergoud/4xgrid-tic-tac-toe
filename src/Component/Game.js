import React from "react";
import { useLocation } from "react-router-dom";

function Game() {
  const location = useLocation();
  const { winner } = location.state || {};

  return (
    <div>
      <h1>Game Over</h1>
      <h2>{winner ? `${winner} won the game!` : "It's a draw!"}</h2>
    </div>
  );
}

export default Game;
