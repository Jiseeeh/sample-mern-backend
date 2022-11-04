import { Express, Request, Response } from "express";
import express from "express";

import todo from "./routes/todo";

const app: Express = express();
// const PORT = 3001;
app.use(express.json());
app.use(todo);

app.get("/api/home", async (req: Request, res: Response) => {
  res.json({
    message: "WELCOME!",
  });
});

module.exports = app;
