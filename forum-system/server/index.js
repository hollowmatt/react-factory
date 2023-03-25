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
  const result = users.filter(
    (user) => user.email === email && user.password === password
  );
  if(result.length === 0) {
    const newUser = { id, email, password, username};
    users.push(newUser);
    return res.json({
      message: "Account created successfully",
    });
  }
  res.json({
    error_message: `User already exists`,
  });

});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});