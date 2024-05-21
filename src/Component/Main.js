import React, { useState } from "react";
import Comp from "./Comp";
import { useSearchParams } from "react-router-dom";

export default function Main() {
  const [searchParams] = useSearchParams();
  const vari1 = searchParams.get("vari1");
  const vari2 = searchParams.get("vari2");

  const [count, setCount] = useState(0);
  const [colour, setColour] = useState([
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ]);

  const [boxvari, setBoxvari] = useState(vari1 || "");

  const renderBoard = () => {
    return Array.from({ length: 16 }, (_, i) => (
      <Comp
        key={i}
        ind={i}
        vari1={vari1}
        vari2={vari2}
        boxvari={boxvari}
        count={count}
        setCount={setCount}
        colour={colour}
        setColour={setColour}
        setBoxvari={setBoxvari}
      />
    ));
  };

  return (
    <div>
      <div id="dis">{renderBoard()}</div>
      <div id="box1">{boxvari}'S TURN </div>
    </div>
  );
}
