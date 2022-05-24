import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "./../Assets/Game.css";
import quartoGame from "./../Assets/quartoGame.png";
import "./../Assets/regles.css";


export default function regles() {
  const [difficulty, setDifficulty] = useState(1);
  



  return (
    <>
<div className="flex flex-col tab-container">
<i className="fa-solid fa-arrow-turn-down-left"></i>
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Niveau
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Configurations gagnantes
              </th>
             
            </tr>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              alignement de quatre pi`eces avec un caract`ere en
commun.

              </td>
             
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Celles du niveau 1 ou quatre pi`eces, avec un car-
act`ere en commun, plac ́ees sur un petit carr ́e (carr ́e de la forme a1, a2, b1, b2
ou b2, b3, c2, c3 par exemple).
              </td>
              
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
              <td className="2 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
              Celles du niveau 2 ou quatre pi`eces, avec un car-
act`ere en commun, plac ́ees sur un grand carr ́e (carr ́e de la forme a1, a3, c1, c3,
par exemple).              </td>
              
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
              <td className="2 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
              Celles du niveau 3 ou quatre pi`eces, avec un car-
act`ere en commun, plac ́ees sur un carr ́e tournant (carr ́e de la forme a2, b1, c2, b3,
par exemple, ou le carr ́e a2, c1, d3, b4).</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
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
