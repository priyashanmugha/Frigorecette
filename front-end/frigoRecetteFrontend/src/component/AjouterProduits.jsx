import React, { useState } from "react";


export const AjouterProduits = () => {
  
  function handleSubmitPlusPropre(e) {
  e.preventDefault(); // Empêche le rechargement de la page
    const form = e.target;// target est le champs de l'objet event avec lequel on a initialisé la var form
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
    <div>
      AjouterProduits
      <form method="post" onSubmit={handleSubmitPlusPropre}>
        <label htmlFor="nom">Nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          required
          minLength="4"
          maxLength="18"
          size="10"
        />

        <label htmlFor="date_expiration">Date d'expi</label>
        <input
          type="date"
          id="date_expiration"
          name="date_expiration"
          defaultValue="2018-07-22"
          min="2018-01-01"
          max="2025-12-31"
        />

        <label htmlFor="categorie">Categorie</label>
        <input
          type="text"
          id="categorie"
          name="categorie"
          required
          minLength="4"
          maxLength="8"
          size="10"
        />

        <label htmlFor="quantite">Quantité</label>
        <input 
        type="number" 
        id="quantite" 
        name="quantite" 
        min="1" 
        max="35" />

        <input type="submit" value="Rajouter le produit !" />
      </form>
    </div>
  );
};