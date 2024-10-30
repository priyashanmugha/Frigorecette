// fonction arrow flechee
import React from 'react'
import { Recettes } from './Recettes'
import { Produits } from './Produits'
import { RecettesAvailable } from './RecettesAvailable'

//on retourne du jsx
//les composants sont contenus dans un fragment ou une div
export const Frigo = () => {
  return (
    <div>
    <Recettes></Recettes>
    <Produits></Produits>
    <RecettesAvailable></RecettesAvailable>
    </div> 

  )
}
