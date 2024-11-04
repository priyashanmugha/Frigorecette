// Frigo composant parent
import { useState } from 'react';
import React from 'react'
import { Produits } from './Produits'
import { Recettes } from './Recettes'
import { RecettesAvailable } from './RecettesAvailable'
import { AjouterProduits } from './AjouterProduits';
import { AjouterRecettes } from './AjouterRecettes';


//on retourne du jsx
//les composants sont contenus dans un fragment ou une div
export const Frigo = () => {
  return (
    <div>
    <Recettes></Recettes>
    <Produits></Produits>
    <RecettesAvailable></RecettesAvailable>
    <AjouterProduits></AjouterProduits>
    <AjouterRecettes></AjouterRecettes>
    </div> 

  )
}
