import React, { useState,useEffect } from "react";
import "./../Assets/Navbar.css";

export default function Cover() {

  useEffect(() => {
    Swal.fire({
        title: 'Veuillez saisir votre Nom avant de jouer',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        confirmButtonText: 'Commancer',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
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
