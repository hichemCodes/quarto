import React, { useState,useEffect } from "react";
import "./../Assets/Navbar.css";

export default function Cover(props) {
  const [level, setLevel] = useState(1);


  const handleLevelChange = (number) => {
    setLevel(number);
    props.setDifficulty(number);
  };

  useEffect(() => {
    /*Swal.fire({
        title: 'Bonjour, veuillez saisir le niveau',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        confirmButtonText: 'Commancer',
        showLoaderOnConfirm: true,
        preConfirm: (name) => {
            handleLevelChange(parseInt(name));
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
         

            document.getElementsByClassName('cover')[0].style.display = "none";
            document.getElementsByClassName('welcomeMessage')[0].style.display = "block";


        }
      })*/
      swal("Bonjour, veuillez saisir le niveau:", {
         content: "input",
      })
      .then((value) => {
        handleLevelChange(parseInt(value));
        document.getElementsByClassName('cover')[0].style.display = "none";
        document.getElementsByClassName('welcomeMessage')[0].style.display = "block";
      });
    
  },[]);
 
  return (
    <div className="cover">
     
    </div>
     
  );
}
