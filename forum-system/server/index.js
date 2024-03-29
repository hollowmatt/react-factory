const express = require("express");
const crypto = require('crypto');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4040;

const users = [];
const usersInfo = [];
const threadList = [];
const generateID = () => crypto.randomUUID();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

//return a 'hello' message
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

//return all threads
app.get("/api/all/threads", (req, res) => {
  res.json({
    threads: threadList,
  });
});

app.get("/api/all/users", (req, res) => {
  res.json({
    users: usersInfo,
  });
});

//accept a like on a given thread
app.post("/api/thread/like", (req, res) => {
  const {threadId, userId} = req.body;
  const result = threadList.filter((thread) => thread.id === threadId);
  const threadLikes = result[0].likes;
  const authReaction = threadLikes.filter((user) => user === userId);
  if (authReaction.length === 0) {
    threadLikes.push(userId);
    return res.json({
      message: "You've liked it"
    });
  }
  res.json({
    error_message: "You can only like a thread once",
  });
});

app.post("/api/register", async(req,res) => {
  const { email, password, username } = req.body;
  const id = generateID();
  const result = users.filter(
    (user) => user.email === email && user.password === password
  );
  if(result.length === 0) {
    const newUser = { id, email, password, username};
    const newUserInfo = {id, username};
    users.push(newUser);
    usersInfo.push(newUserInfo);
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

app.post("/api/thread/replies", (req, res) => {
  const {id} = req.body;
  const result = threadList.filter((thread) => thread.id === id);
  res.json({
    replies: result[0].replies,
    title: result[0].title,
  });
});

app.post("/api/create/reply", async(req,res) => {
  const {id, userId, reply} = req.body;
  const result = threadList.filter((thread) => thread.id === id);
  const user = users.filter((user) => user.id === userId);
  result[0].replies.unshift({
    userId: user[0].id,
    name: user[0].username,
    text: reply,
  });
  res.json({
    message: "response added",
  })
});


// End of methods
// Listen for connections

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});