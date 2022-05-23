import React, { useState, useEffect } from "react";
import Board from "../Components/Board";
import Navbar from "../Components/Navbar";
import Cover from "../Components/Cover";
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
       <Cover/>
      <Navbar
        setDifficulty={(diff: any) => {
          setDifficulty(diff);
        }}
      />
      {gameOver.bool ? (
        gameOver.player === Player.HUMAN ? (
          <div className="welcomeMessage">
              <span>Bonjour, {localStorage.getItem('name')} : Vous avez gagné</span>
         </div>
        ) : (
          <div className="welcomeMessage">
              <span>Bonjour, {localStorage.getItem('name')} : Vous avez perdu</span>
          </div>
        )
      ) : currentPlayer === Player.HUMAN ? (
         <div className="welcomeMessage">
          <span>Bonjour, {localStorage.getItem('name')} : C'est ton tour</span>
         </div>
      ) : (
          <div className="welcomeMessage">
            <span>Bonjour, {localStorage.getItem('name')} : C'est le tour de l'ordinature</span>
          </div>
      )}




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

        {gameOver.bool ? (
        gameOver.player === Player.HUMAN ? (
          <div className="instructions">Vous avez gagné</div>
        ) : (
          <div className="instructions">Vous avez perdu</div>
        )
      ) : currentPlayer === Player.HUMAN ? (
        <div className="instructions"><p>Votre tour</p></div>
      ) : (
        <div className="instructions">Au tour de IA </div>
      )}

    </>
  );
}
