import { Express, Request, Response } from "express";
import express from "express";

const app: Express = express();
// const PORT = 3001;

app.get("/api/home", async (req: Request, res: Response) => {
  res.json({
    message: "WELCOME!",
  });
});

module.exports = app;
