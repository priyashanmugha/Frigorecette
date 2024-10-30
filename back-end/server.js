//imporatation des modules necessaires 
const express = require('express');
const app = express();
const mysql = require("mysql2");

// importation Middleware pour gérer les requêtes Cross-Origin
const cors = require("cors");
app.use(cors());
const port = 3306;

// Utilisation de middleware
// app.use(cors()); // Permet les requêtes cross-origin (important pour les applications web modernes)
// app.use(express.json()); // Middleware pour traiter les données JSON dans les requêtes

// creation de la connexion de node.Js à la BDD 
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Password01!',
  database: 'frigo_recettes'
});

//verification si la connexion est établie à la BDD et gestion des erreurs
// db.connect((err)  => {
//   if(err){
//     console.error('Erreur de connexion :', err.stack);
//     return;
//   }
//   console.log('Connexion réussie à la BDD');
// });
db.query("SELECT * FROM produits", (err, results, fields) => {
  console.log("Erreur", err);
  console.log("resultat", results);
  console.log("Echamps", fields);
})
// requete récupérer tous les produits de la table
app.get("/produits", (req, res) => {
  db.query("SELECT * FROM produits", (err, results, fields) => {
    console.log("Erreur", err);
    console.log("resultat", results);
    console.log("Echamps", fields);
    res.send(results);
  })
});
// requete récupérer tous les champs de la colonne recettes de la table
app.get("/recettes", (req, res) => {
  db.query("SELECT * FROM recettes", (err, results, fields) => {
    console.log("Erreur", err);
    console.log("resultat", results);
    console.log("Echamps", fields);
    res.send(results);
  })
});
//Demarrage du serveur Express
app.listen(port, () => {
  console.log(`Serveur démarré sur le  ${port}, 127.0.0.1`)
});