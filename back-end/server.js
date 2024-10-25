//creation librairie express
const express = require('express');
const app = express();
const port = 3306;
//importer la librairie mysql2 
const mysql =require("mysql2");

// creation de la connexion de node.Js à la BDD 
const conection = mysql.createConnection({
  host:'l127.0.0.1',
  user:'root',
  password: 'Password01!',
  database:'frigo_recettes'
});

//verification si la connexion est établie à la BDD et gestion des erreurs
conection.connect((err)  => {
  if(err){
    console.error('Erreur de connexion :', err.stack);
    return;
  }
  console.log('Connexion réussie à la BDD');
});
//creation d'un driver personnalisé et endpoint /db-status avec methode ping() pour vérifier l'état de la connexion à la BDD : si active  affiche un message BDD connectée si non affiche code 500

app.get('/db-status', (req, res) => {
  conection.ping((err) => {
    if (err) {
      console.error('Erreur lors de la vérification de la connexion :' , err);
      return res.status(500).send('BDD non connectée');
    }
    res.send('Base de donnée connectée');
});
});
//Demarrage du serveur Express
  app.listen(port, () => {
  console.log(`Serveur démarré sur le  ${port}, http://localhost:3000/`)
});