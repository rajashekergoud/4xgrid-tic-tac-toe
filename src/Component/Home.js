import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [vari1, setVari1] = useState("");
  const [vari2, setVari2] = useState("");

  function handleChange1(e) {
    setVari1(e.target.value.toUpperCase());
  }

  function handleChange2(e) {
    setVari2(e.target.value.toUpperCase());
  }

  return (
    <div className="home">
      <label>Enter Player Names:</label>
      <input value={vari1} onChange={handleChange1} placeholder="Player A" />
      <input value={vari2} onChange={handleChange2} placeholder="Player B" />
      <Link id="start" to={`/main?vari1=${vari1}&vari2=${vari2}`}>
        Start Game
      </Link>
    </div>
  );
}
