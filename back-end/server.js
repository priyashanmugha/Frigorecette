//imporatation des modules necessaires
const express = require("express");
const app = express();
const mysql = require("mysql2");
// importation Middleware pour gérer les requêtes Cross-Origin
const cors = require("cors");
app.use(cors());
app.use(express.json())
const port = 3306;
// importation du package mongodb
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://priya:UllaipoCDA24@clusterfrigo.a7izu.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFrigo";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// creation de la requete pour connexion a la BDD
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close(); 
    AfficherMesCollections();
  }
}

// afficher le contenu de la liste des collections
 function AfficherMesCollections(){
  const dbName = "sample_mflix";
  const db = client.db(dbName); //  db indique que toutes les données qu'on utilise dans cette BDD bien spécifique
  db.listCollections()
  .toArray()
  .then((cols) =>
    cols.map((col, index) => {
      console.log(`Collections ${index}:`, col.name)
  })
  );
}
run().catch(console.dir);




// Utilisation de middleware
// app.use(cors()); // Permet les requêtes cross-origin (important pour les applications web modernes)
// app.use(express.json()); // Middleware pour traiter les données JSON dans les requêtes

// creation de la connexion de node.Js à la BDD
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Password01!",
  database: "frigo_recettes",
});

//verification si la connexion est établie à la BDD et gestion des erreurs
// db.connect((err)  => {
//   if(err){
//     console.error('Erreur de connexion :', err.stack);
//     return;
//   }
//   console.log('Connexion réussie à la BDD');
// });

// requete récupérer tous les produits de la table
app.get("/produits", (req, res) => {
  db.query("SELECT * FROM produits", (err, results, fields) => {
    console.log("Erreur", err);
    console.log("resultat", results);
    console.log("Echamps", fields);
    res.send(results);
  });
});
// requete récupérer tous les champs de la colonne recettes de la table
app.get("/recettes", (req, res) => {
  db.query("SELECT * FROM recettes", (err, results, fields) => {
    console.log("Erreur", err);
    console.log("resultat", results);
    console.log("Echamps", fields);
    res.send(results);
  });
});


// requete recuperation des donnees saisies par l'utilisateur lors d'ajout de produits
app.post("/ajouterproduits", (req, res) => {
  console.log(req)
  const { nom, quantite, date_expiration, categorie } = req.body;
  // l'objet req appartient à la class interface donc req a tjr un champs body
  // on fait une deconstruction du body ligne champs par champs
  console.log(nom, quantite, date_expiration, categorie);
  // possibilité de faire 2 syntaxes qd on fait une requete sql soit une const sql qui insert un produit dans la table produits av des valeurs non connues def par ?
  //const sql = '`INSERT INTO produits (nom, quantite, date_expiration, categorie)VALUES (?, ?, ?, ?)'
  // soit la db query
  db.query(`INSERT INTO produits (nom, quantite, date_expiration, categorie)
    VALUES ('${nom}', '${quantite}','${date_expiration}', '${categorie}')`,// un simple cote doit encapsuler chaque champs pour 
    function (err, results, fields){
    console.log("resultat", results, err, fields);
    res.send('post request pour ajouter un produit');
    }
  );
});
//Demarrage du serveur Express
app.listen(port, () => {
  console.log(`Serveur démarré sur le  ${port}, 127.0.0.1`);
});
