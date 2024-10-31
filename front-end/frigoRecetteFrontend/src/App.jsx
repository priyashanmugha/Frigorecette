import { useState } from 'react'
import './App.css'
import { Recettes } from './component/Recettes'
import { Produits } from './component/Produits'
import { RecettesAvailable} from './component/RecettesAvailable'
import { Frigo } from './component/Frigo'
import { AjouterProduits } from "./component/AjouterProduits";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Frigo></Frigo>
      <AjouterProduits />
    </>
  )
}

export default App
