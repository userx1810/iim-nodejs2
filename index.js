const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

const users = [{
        id: 1,
        name: "Alice"
    },
    {
        id: 2,
        name: "Bob"
    },
];

app.get("/users", (req, res) => {
    res.send(users);
});

app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    return res.send(users);
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.fint((element) => element.id == parseInt(id));
    if (user == undefined) {
        return res.status(404).send("Post not found");
    }
    return res.send(user);
});

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((element) => element.id == parseInt(id));
    if (user == undefined) {
        return res.status(404).send("User not found");
    }
    user.name = req.body.name;
    return res.send(users);
});


app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((element) => element.id == parseInt(id));
    if (user == undefined) {
        return res.status(404).send("User not found");
    } 
    users.splice(parseInt(id)-1,1);
    return res.send(users);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


// /users en GET == tous les utilisateurs
// /users en POST == créer un utilisateur
// /users/:id en GET == un seul utilisateur
// /users/:id en PUT == modifier un utilisateur
// /users/:id en DELETE == supprimer un utilisateur


/**const posts = [{
        id: 1,
        title: "Mon premier post"
    },
    {
        id: 2,
        title: "Mon deuxième post"
    },
];


app.get("/posts", (req, res) => {
    return res.send(posts);
});
app.post("/posts", (req, res) => {
    const post = req.body;
    posts.push(post);
    return res.send(posts);
});
app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    const post = posts.fint((element) => element.id == parseInt(id));
    if (post == undefined) {
        return res.status(404).send("Post not found");
    }
    return res.send(post);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});*/

