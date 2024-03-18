import React from "react";
import './style.css';
import { useState } from 'react';
function Comp(props)
{ 
    const {ind,count, setVari,setCount, colour, setColour} = props;
    let i = Math.floor(ind/4);
    let j = ind%4;
    let tempColour = [...colour];
const checkWin = () => {
    if (checkHorizontalWin() || checkVerticalWin() || checkDiagonalWin()) {
        if(tempColour[i][j]=="red")
        {
            setVari("RED WINS");
        }
        else{
            setVari("BLUE WINS");
        }
    }
};
 
const checkHorizontalWin = () => {
    for (let i = 0; i < 4; i++) {
            if (tempColour[i][0] != '' &&
                tempColour[i][0] == tempColour[i][1] &&
                tempColour[i][0] == tempColour[i][2] &&
                tempColour[i][0] == tempColour[i][3]) {
                return true;
        }
    }
    return false;
};

const checkVerticalWin = () => { 
    for (let j = 0; j < 4; j++) {
        if (tempColour[0][j] != '' &&
            tempColour[0][j] == tempColour[1][j] &&
            tempColour[0][j] == tempColour[2][j] &&
            tempColour[0][j] == tempColour[3][j]) {
            return true;
        }
}
    return false;
};

const checkDiagonalWin = () => {
    if (tempColour[0][0] != '' &&
            tempColour[0][0] == tempColour[1][1] &&
            tempColour[0][0] == tempColour[2][2] &&
            tempColour[0][0] == tempColour[3][3]) {
            return true;
            }
        if (tempColour[3][0] != '' && 
            tempColour[3][0] == tempColour[2][1] &&
            tempColour[3][0] == tempColour[1][2] &&
            tempColour[3][0] == tempColour[0][3]) {
            return true;
            }
    return false;
}; 
    const handleColour = () => {
        if(tempColour[i][j] != '')
            return;
    setCount(prevCount=>prevCount+1);
        if(count%2===0)
        { 
        tempColour[i][j] = "red";
        setColour([...tempColour]);
            setVari("PLAYER A TURN");

        }
        else{
            tempColour[i][j] = "blue";
            setColour([...tempColour]);
            setVari("PLAYER B TURN");
        }
            checkWin();
        
    };
    
    return(
         
    <div id="box" style={{ backgroundColor: colour[i][j] }} onClick={handleColour}> 
    </div>
);
    
}
export default Comp;