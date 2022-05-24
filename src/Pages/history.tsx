
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "./../Assets/Game.css";
import quartoGame from "./../Assets/quartoGame.png";


export default function history() {
  const [difficulty, setDifficulty] = useState(1);
  



  return (
    <>
<div className="history">

Quarto ! est un des jeux les plus primés de l’histoire et un des plus beaux.  Inventé en 1985 par le français Blaise Muller, il était à l’origine un casse tête puis est devenu un jeu abstrait. Il fait parti de la famille des jeux d’alignement et de forme.
<br/>

Sur un plateau de 4×4, le but va être d’aligner 4 pièces ayant au moins une caractéristique commune. Mais c’est votre adversaire qui vous donne la pièce à placer. Eh oui,  sinon ce serait trop facile !
<br/>

Il existe 16 pièces toutes différentes et possédant quatre caractéristiques parmi les suivantes:
<br/>


    La couleur (blanche ou noire)
    <br/>

    La forme (ronde ou carré)
    <br/>

    La taille (petite ou grande)
    <br/>

    Le sommet (plein ou creux)
    <br/>

Donc vous faites Quarto ! lorsque vous alignez 4 pièces blanches ou 4 grandes par exemple. Saurez vous retrouvez un Quarto dans la première photo de l’article ? Il y en a même 4.
<br/>

Si les deux joueurs jouent prudemment, la partie risque fort de se terminer par un match nul. Donc pour corser la chose, il est tout a fait possible d’additionner des possibilités de quarto à la variante de base:
<br/>

    Quarto en petits carrés (ex: A1,A2,B1,B2), 9 possibilités
    <br/>

    En grands carrés (ex: A1,A3,C1,C3), 4 possibilités
    <br/>

    En petits carrés en diagonale (ex: A2,B1,B3,C2), 4 possibilités
    <br/>

    En grands carrés en diagonale (ex: A2,C1,D3,B4), 4 possibilités
    <br/>

    Le très grand carré qui correspond aux 4 cases de coins, 1 possibilité
    <br/>

Si vous rajoutez les 10 possibilités d’alignement, cela peut faire en tout 32 façons de faire quarto. Une fois la variante de base épuisée, commencer par la première puis les suivantes pour tester. Le match nul deviendra de plus en plus rare et même impossible à partir de la 4ème.
<br/>

Du point de vue théorique, il est très difficile d’analyser ce jeu. Je pense qu’il est possible d’appliquer la notion de parité issue de l’othello. En effet il existe 16 cases (nombre paire) donc le deuxième joueur sera celui qui jouera en dernier. La parité peut aussi s’appliquer aux caractéristiques puisqu’elles marchent en nombres paires également. Bref, il s’agit tout de même de faire un savant calcul pour ne pas donner la mauvaise pièce à son adversaire et bien placer celles qu’il vous donnent.

<br/>
<br/>

<br/>


</div>

<div className="navContainer">

<img alt="" src={quartoGame} className="logo" />
<div className="navcontent">
 

   <button onClick={()=> document.location.reload()}>
   <i className="fa-solid fa-turn-down-left"></i>
   </button>
</div>


</div>




    </>
  );
}
























