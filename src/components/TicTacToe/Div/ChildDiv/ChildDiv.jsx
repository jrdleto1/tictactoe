import React, { useState } from "react";
import tictacStyles from '../../Tictactoe.module.css'

const ChildDiv = ({ totalTurns, parentIndex, ownIndex, width, context }) => {
  let turn;
  const [value, setValue] = useState("");
  let test = (event, context) => {
    //Check if value is empty
    if (value !== "O" && value !== "X") {
      if (context.getTotalTurns() !== totalTurns) {
        context.setTotalTurns(totalTurns);
      }
 
      context.currentTurn();
      //Get which player clicks
      context.getTurn() === "O" ? (turn = "X") : (turn = "O");
      let parentIndex = parseInt(event.currentTarget.className.split("-")[1]);
      let childIndex = parseInt(event.currentTarget.className.split("-")[2]);
      let currentIndex = [parentIndex,childIndex]; 
      context.setCoords(turn, currentIndex);
      //Just for background
      turn === "X"
        ? event.target.classList.add(`${tictacStyles.activeX}`)
        : event.target.classList.add(`${tictacStyles.activeY}`);
      context.changeTurn(turn);
      setValue(prevCount => turn);
      //Check if all values are filled
      // if (context.getCurrentTurn() === totalTurns) {
      //   alert("Draw");
      // }
    }
  };

  return (
    <div
      onClick={e => test(e, context)}
      className={`${tictacStyles.row} r-${parentIndex}-${parentIndex * width + ownIndex}`}
    >
      <p>{value}</p>
    </div>
  );
};

export default ChildDiv;
