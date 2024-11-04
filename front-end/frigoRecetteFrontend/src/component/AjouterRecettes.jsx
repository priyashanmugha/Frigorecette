import React, {useState} from 'react'

export const AjouterRecettes = () => {

    function handleSubmitRecette(e) {
        e.preventDefault(); // Empêche le rechargement de la page
          const  = e.target;// target est le champs de l'objet event avec lequel on a initialisé la var form
          const formData = new FormData(form);
          const formJson = Object.fromEntries(formData.entries());
          console.log(formJson, form.method)
          fetch("http://localhost:3306/ajouterproduits", {
            method: form.method,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formJson),
          });
        }
  return (
    <div>AjouterRecettes
        <h1>
            Recette
        </h1>
    </div>
  )
}
