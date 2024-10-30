import React, { useEffect, useState } from "react";
import axios from "axios";

// importer axios et faire une requete produits avec methode getProduits
// lancer le back pour visualiser
export const Produits = () => {
  const [mesproduits, setMesproduits] = useState([]); // definitioon de la variable avec useState
  
  async function getProduits() {
    try {
      const response = await axios.get("http://localhost:3306/produits");
      console.log(response.data);// on precise ici que l'on veut afficher dans la coonsole du nav que les data
      setMesproduits(response.data);// on stock les produits

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    console.log("test");
    getProduits();
  }, []); 

  return <div>Produits <div>{mesproduits.map((monproduit)=>(
    <p >{monproduit.id}</p>  ))}</div></div>
};
