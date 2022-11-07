import { Express } from "express";
import express from "express";
import rateLimit from "express-rate-limit";

const app: Express = express();
const limiter = rateLimit({
  max: 20,
  // 2 minutes - 120_000ms
  windowMs: 120_000,
  message: "Please wait for 2 minutes before making another request! ",
});

app.use(limiter);

export = app;
