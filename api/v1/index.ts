import express from "express";

const app = express();
// const PORT = 3001;

app.get("/api/home", async (req, res) => {
  res.json({
    message: "WELCOME!",
  });
});

module.exports = app;
