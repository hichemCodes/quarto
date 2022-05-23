import React, { useState,useEffect } from "react";
import "./../Assets/Navbar.css";

export default function Cover() {

  useEffect(() => {
    Swal.fire({
        title: 'Veuillez saisir votre nom avant de jouer',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        confirmButtonText: 'Commancer',
        showLoaderOnConfirm: true,
        preConfirm: (name) => {
            localStorage.setItem('name',name);
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
         

            document.getElementsByClassName('cover')[0].style.display = "none";
            document.getElementsByClassName('welcomeMessage')[0].style.display = "block";


        }
      })
    
  },[]);
 
  return (
    <div className="cover">
     
    </div>
     
  );
}
