const express = require("express");
const cosrs = require("cors");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({
    message: "Hello Jason",
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});