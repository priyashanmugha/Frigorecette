import React, {useEffect,useState} from 'react'
import axios from "axios";

// requete pour récupérer les recettes depuis le back
export const Recettes = () => {
  const[mesrecettes , setMesrecettes] = useState ([]);
  async function getRecettes() {
    try {
      const response = await axios.get("http://localhost:3306/recettes");
      console.log(response.data);// on precise ici que l'on veut afficher dans la console du nav que les data
      setMesrecettes(response.data);// on stock les recettes

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    console.log("test");
    getRecettes();
  }, []); 
 
return <div>Receettes <div>{mesrecettes.map((marecette)=>(
  <p >{marecette.id}</p>  ))}</div></div>
};
