import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "./../Assets/Game.css";
import quartoGame from "./../Assets/quartoGame.png";


export default function history() {
  const [difficulty, setDifficulty] = useState(1);
  



  return (
    <>
       <div className="navContainer">

<img alt="" src={quartoGame} className="logo" />
<div className="navcontent">
 

   <button onClick={()=> document.location.reload()}>
   <i className="fa-solid fa-turn-down-left"></i>
   </button>
</div>

  <div className="welcomeMessage">
          
        <h2>Historique de Quarto</h2>
            <p>Quarto ou Quarto! est un jeu de société combinatoire abstrait au tour par tour, créé par Blaise Muller, primé en 1985 au Concours international de créateurs de jeux de société de Boulogne-Billancourt, sous le nom de 4×41 et édité depuis 1991 par Gigamic.Il s’agit d’un jeu au concept très simple mais avec beaucoup de possibilités.</p>
            <h2>Récompenses </h2>
            <ul>
              <li> Dé d’Or des Créateurs de Jeux – Paris, FRANCE </li>
              <li> Oscar du Jouet-Toy Oscar Paris, FRANCE </li>
              <li>Jouet de l’année-Game of the Year - BRUSSELS</li>
             <li>Super As d’Or Festival International des Jeux-Super Golden Ace – Cannes, FRANCE</li>
             <li>Toy Award– BENELUX </li>
             <li>Spiel des Jahres-Game of the Year GERMANY</li>
             <li>Giocco Dell’anno-Game of the Year – ITALY </li>
             <li>Speelgoed Vant Jaar-Game of the year – NETHERLANDS</li>
             <li>Mensa Select Top 5 Best Games – USA </li>
              <li>Parent’s Choice Gold Award – USA </li>
              <li>Best Bet of the Toy Testing Council – CANADA </li>
              <li>Prix d’Excellence des Consommateurs-Consumer’s Toy Award- Quebec, CANADA </li>
              <li>Games Magazine “Games 100 Selection”– USA</li>
              <li>Game of the Year – FINLAND </li>
              <li>Parent’s Choice Top 25 games in 25 years – USA </li>
              </ul>

         </div>
</div>




    </>
  );
}
