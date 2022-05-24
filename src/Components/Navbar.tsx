import React, { useState } from "react";
import quartoGame from "./../Assets/quartoGame.png";
import "./../Assets/Navbar.css";
import swal from 'sweetalert';


export default function Navbar(props: any) {
  const [level, setLevel] = useState(1);
  const [showModal, setShowModal] = React.useState(false);


  const handleLevelChange = (number: number) => {
    setLevel(number);
    props.setDifficulty(number);
  };

  const buttons: boolean = true;

  const areYouSure = () => {
    swal({
      title: "Etes-vous sûr?",
      text: "Attention vous pouvez pas revenir ",
      icon: "warning",
      //buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
         document.location.reload();
      } else {
        
      }
    });
  }

  

  return (
    <div className="navContainer">

       <img alt="" src={quartoGame} className="logo" />
      <div className="navcontent">
        {/*
                    <div className="dropdown">
          <button data-modal-toggle="defaultModal"><i className="fa-solid fa-ranking-star" ></i></button>
          <button></button>
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
         */}
       

          <button onClick={areYouSure}>
            <i className="fa-solid fa-arrow-rotate-left"></i>
          </button>
      </div>

     
    </div>
     
  );
}
