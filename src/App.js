import React from 'react';
import Comp from './Component/Comp';
import './Component/style.css';
import { useState } from 'react';




function App() {
  
  const [count, setCount] = useState(0);
   
  const [colour,setColour] = useState([
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
  ]
  );
  const [vari,setVari]= useState("PLAYER A TURN");


  const board=[
  <Comp  ind={0} vari={vari} setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour}  />,
  <Comp  ind={1} vari={vari} setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour}  />,
  <Comp ind={2} vari={vari} setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour} />,
  <Comp ind={3} vari={vari} setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour} />,
  <Comp ind={4} vari={vari}setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour} />,
  <Comp ind={5} vari={vari}setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour} />,
  <Comp ind={6} vari={vari}setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour} />,
  <Comp ind={7} vari={vari}setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour} />,
  <Comp ind={8} vari={vari}setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour}  />,
  <Comp ind={9} vari={vari}setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour} />,
  <Comp ind={10} vari={vari}setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour} />,
  <Comp ind={11} vari={vari}setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour} />,
  <Comp ind={12} vari={vari}setVari={setVari}count={count} setCount={setCount}colour={colour} setColour={setColour} />,
  <Comp ind={13} vari={vari}setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour}  />,
  <Comp ind={14} vari={vari}setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour} />,
  <Comp ind={15} vari={vari}setVari={setVari}count={count} setCount={setCount} colour={colour} setColour={setColour} />,
  ]
  return ( 
  <> 
  
  <div id="dis">
{board}
  </div>
  <div id="box1">{vari}</div>

  </>
     );
}

export default App;
