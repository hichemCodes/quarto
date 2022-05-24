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
        {}
       
          <button onClick={areYouSure}>
            <i className="fa-solid fa-arrow-rotate-left"></i>
          </button>
      </div>

     
    </div>
     
  );
}
