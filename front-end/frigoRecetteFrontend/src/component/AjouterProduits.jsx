import React, { useState } from "react";


export const AjouterProduits = (e) => {
  const [status, setStatus] = useState(null);

 async  function handleSubmitPlusPropre(e) {
  e.preventDefault(); // Empêche le rechargement de la page

    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());

    fetch("http://localhost:3306/ajouterproduit", {
      method: e.method,
      headers: {
        "Content-Type": "application/json",
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