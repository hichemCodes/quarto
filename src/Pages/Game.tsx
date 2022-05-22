import React, { useState, useEffect } from "react";
import Board from "../Components/Board";
import Navbar from "../Components/Navbar";
import "./../Assets/Game.css";
import { Player } from "../Types/Piece";

export default function Game() {
  const [difficulty, setDifficulty] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(Player.HUMAN);
  const [gameOver, setGameOver] = useState({
    bool: false,
    player: Player.NOTFILLED,
  });

  return (
    <>
      <Navbar
        setDifficulty={(diff: any) => {
          setDifficulty(diff);
        }}
      />
      {/*gameOver.bool ? (
        gameOver.player === Player.HUMAN ? (
          <div className="instructions">You won.</div>
        ) : (
          <div className="instructions">You Lost.</div>
        )
      ) : currentPlayer === Player.HUMAN ? (
        <div className="instructions">Your turn.</div>
      ) : (
        <div className="instructions">Ai turn.</div>
      )*/}

      <Board
        difficulty={difficulty}
        setTurn={() => {
          if (currentPlayer === Player.AI) {
            setCurrentPlayer(Player.HUMAN);
          } else if (currentPlayer === Player.HUMAN) {
            setCurrentPlayer(Player.AI);
          }
        }}
        setGameOver={(bool: boolean, p: Player) => {
          setGameOver({
            bool: bool,
            player: p,
          });
        }}
        currentPlayer={currentPlayer}
        gameOver={gameOver}
      />
    </>
  );
}
