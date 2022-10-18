// const express = require("express");
import express from 'express';
const router = express.Router();
const app = express();
import * as controller from "../controllers/todos.js";

// // import { getTodo, getTodos, postTodo, deleteTodo, putTodo } from "../controllers/todos.js";

// //ROUTES//

// //create a todo

// router.post("/todo", controller.postTodo);

// //get all todos

// router.get("/todos", controller.getTodos);

// //get a todo

// router.get("/todo/:id", controller.getTodo);

// //update a todo

// router.put("/todo/:id", controller.putTodo);

// //delete a todo

// router.delete("/todo/:id", controller.deleteTodo);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});

// module.exports = app;

// // export default router;

