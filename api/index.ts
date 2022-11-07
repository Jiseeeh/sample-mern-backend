import { Express, Request, Response } from "express";
import express from "express";

import todo from "./routes/todo";
import limiter from "./middleware/limiter";

const app: Express = express();
// const PORT = 3001;
app.use(limiter);
app.use(express.json());
app.use(todo);

app.get("/api/home", async (req: Request, res: Response) => {
  res.json({
    message: "WELCOME!",
  });
});

// app.listen(process.env.PORT || PORT, () => {
//   console.log("server started!");
// })
module.exports = app;
