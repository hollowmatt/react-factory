const express = require("express");
const crypto = require('crypto');
const cors = require("cors");
const app = express();
const PORT = 4040;

const users = [];
const generateID = () => crypto.randomUUID();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello Jason",
  })
});

app.post("/api/register", async(req,res) => {
  const { email, password, username } = req.body;
  const id = generateID();
  console.log({email, password, username, id});
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});