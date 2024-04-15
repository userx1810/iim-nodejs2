const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

app.get("/users", (req, res) => {
  return res.send(users);
});

app.get("/users", (req, res) => {
  return res.send(variablePublication);
});

app.post("/users", (req, res) => {
  const body = req.body;
  variablePublication.push(body);
  return res.send(variablePublication);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// /users en GET = tous les utilisateurs
// /users en POST = créer un utilisateur
// /users/:id en GET = un utilisateur
// /users/:id en PUT = modifier un utilisateur
// /users/:id en DELETE = supprimer un utilisateur
