// const express = require("express");
import express from 'express';
const router = express.Router();
const app = express();
const cors = require("cors");
import * as controller from "../controllers/todos";

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

router.post("/todo", controller.postTodo);

//get all todos

router.get("/todos", controller.getTodos);

//get a todo

router.get("/todo/:id", controller.getTodo);

//update a todo

router.put("/todo/:id", controller.putTodo);

//delete a todo

router.delete("/todo/:id", controller.deleteTodo);

app.listen(5000, () => {
  console.log("server has started on port 5000");
});

// module.exports = app;

export default router;

