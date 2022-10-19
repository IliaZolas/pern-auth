import express from "express";
import * as model from "../models/todos";

async function getTodo(req: express.Request, res: express.Response) {
  const queryResult = await model.getTodo();
  res.send(queryResult);
};

async function getTodos(req: express.Request, res: express.Response) {
  const queryResult = await model.getTodos();
  res.send(queryResult);
};

async function postTodo(req: express.Request, res: express.Response) {
  const queryResult = await model.postTodo();
  res.send(queryResult);
};

async function putTodo(req: express.Request, res: express.Response) {
  const queryResult = await model.putTodo();
  res.send(queryResult);
};

async function deleteTodo(req: express.Request, res: express.Response) {
  const queryResult = await model.deleteTodo();
  res.send(queryResult);
};

export { getTodo, getTodos, postTodo, deleteTodo, putTodo };

// // I dunno what camelcase keys is about, will check later
// import camelcaseKeys from "camelcase-keys"

// async function getTodo(req: express.Request, res: express.Response) {
//   const queryResult = await model.getTodo();
//   res.send(queryResult.rows.map(row => camelcaseKeys(row)));
// };

// async function getTodos(req: express.Request, res: express.Response) {
//   const queryResult = await model.getTodos();
//   res.send(queryResult.rows.map(row => camelcaseKeys(row)));
// };

// async function postTodo(req: express.Request, res: express.Response) {
//   const queryResult = await model.postTodo();
//   res.send(queryResult.rows.map(row => camelcaseKeys(row)));
// };

// async function putTodo(req: express.Request, res: express.Response) {
//   const queryResult = await model.putTodo();
//   res.send(queryResult.rows.map(row => camelcaseKeys(row)));
// };

// async function deleteTodo(req: express.Request, res: express.Response) {
//   const queryResult = await model.deleteTodo();
//   res.send(queryResult.rows.map(row => camelcaseKeys(row)));
// };