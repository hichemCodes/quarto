import React, { useState } from "react";
import quartoGame from "./../Assets/quartoGame.png";
import replay from "./../Assets/Rotate.png";
import mute from "./../Assets/Mute.png";
import "./../Assets/Navbar.css";

export default function Navbar(props: any) {
  const [level, setLevel] = useState(1);

  const handleLevelChange = (number: number) => {
    setLevel(number);
    props.setDifficulty(number);
  };
  return (
    <>
      <img alt="" src={quartoGame} className="logo" />
      <div className="grid xl:grid-cols-4 grid-cols-1 grid-rows-1 w-3/5 absolute right-10 top-14">
        <div>
          <button className="bigButton">Home</button>
        </div>
       
        <div className="dropdown">
          <button className="bigButton">Difficulty</button>
          <div className="dropdown-content">
            <button
              className="LevelOne"
              onClick={() => {
                handleLevelChange(1);
              }}
              disabled={level === 1 ? true : false}
            >
              Level 1
            </button>
            <button
              onClick={() => {
                handleLevelChange(2);
              }}
              disabled={level === 2 ? true : false}
            >
              Level 2
            </button>
            <button
              onClick={() => {
                handleLevelChange(3);
              }}
              disabled={level === 3 ? true : false}
            >
              Level 3
            </button>
            <button
              onClick={() => {
                handleLevelChange(4);
              }}
              disabled={level === 4 ? true : false}
            >
              Level 4
            </button>
          </div>
        </div>
        <div>
          <button className="miniButton mt-1">
            <img alt="" src={replay} className="replay pl-2" />
          </button>
          <button className="miniButton ml-10">
            <img alt="" src={mute} className="replay pl-2" />
          </button>
        </div>
      </div>
    </>
  );
}
