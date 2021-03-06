import React, { useState, useEffect } from "react";
import Board from "../Components/Board";
import Navbar from "../Components/Navbar";
import Cover from "../Components/Cover";
import "./../Assets/Game.css";

import { Player } from "../Types/Piece";
import { Link } from "react-router-dom";

export default function Game() {
  const [difficulty, setDifficulty] = useState(1);
  const [currentPlayer, setCurrentPlayer] = useState(Player.HUMAN);
  const [gameOver, setGameOver] = useState({
    bool: false,
    player: Player.NOTFILLED,
  });


  


  return (
    <>
      
       <Link to="/history" target="_blank"> <i className="fa-solid fa-book-open"></i></Link>
       <Link to="/regles" target="_blank"><i className="fa-solid fa-screwdriver-wrench"></i></Link>
       <Cover   setDifficulty={(diff: any) => {
          setDifficulty(diff);
        }}/>
      <Navbar
        setDifficulty={(diff: any) => {
          setDifficulty(diff);
        }}
      />
     
          <div className="welcomeMessage">
              <span>Niveau :  {difficulty} </span>
         </div>
       




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
