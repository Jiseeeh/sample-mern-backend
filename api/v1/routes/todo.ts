import { Express } from "express";
import express from "express";

import {
  createTodo,
  getAllTodo,
  getOneTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todoController";

const app: Express = express();

app.route("/api/todos").get(getAllTodo).post(createTodo);
app
  .route("/api/todos/:id")
  .get(getOneTodo)
  .patch(updateTodo)
  .delete(deleteTodo);

// module.exports = app;
export = app;
