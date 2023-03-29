const express = require("express");
const crypto = require('crypto');
const cors = require("cors");
const app = express();
const PORT = 4040;

const users = [];
const threadList = [];
const generateID = () => crypto.randomUUID();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello Jason",
    routes: [
      {
        method: "POST",
        route: "/api/register",
        params: ["email", "password", "username"]
      },
      {
        method: "POST",
        route: "/api/login",
        params: ["email", "password"]
      }
    ]
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
    console.log("account created with id: " + id);
    return res.json({
      message: "Account created successfully",
    });
  }
  res.json({
    error_message: `User already exists`,
  });

});

app.post("/api/login", (req, res) => {
  const {email, password} = req.body;
  
  let result = users.filter(
    (user) => user.email === email && user.password === password
  );

  if (result.length !== 1) {
    return res.json({
      error_message: "Invalid login attempt"
    });
  }

  res.json({
    message: "Login successful",
    id: result[0].id,
  })
});

app.post("/api/create/thread", async(req, res) => {
  const {thread, userId} = req.body;
  const threadId = generateID();
  console.log({thread, userId, threadId});
  threadList.unshift({
    id: threadId,
    title: thread,
    userId,
    replies: [],
    likes: [],
  });

  res.json({
    message: "Thread created",
    threads: threadList,
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});