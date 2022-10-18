import express from "express";
// I dunno what camelcase keys is about, will check later
import camelcaseKeys from "camelcase-keys"

import * as model from "../models/todos.js";

async function getTodo(req, res) {
  const queryResult = await model.getTodo();
  res.send(queryResult.rows.map(row => camelcaseKeys(row)));
};

async function getTodos(req, res) {
  const queryResult = await model.getTodos();
  res.send(queryResult.rows.map(row => camelcaseKeys(row)));
};

async function postTodo(req, res) {
  const queryResult = await model.postTodo();
  res.send(queryResult.rows.map(row => camelcaseKeys(row)));
};

async function putTodo(req, res) {
  const queryResult = await model.putTodo();
  res.send(queryResult.rows.map(row => camelcaseKeys(row)));
};

async function deleteTodo(req, res) {
  const queryResult = await model.deleteTodo();
  res.send(queryResult.rows.map(row => camelcaseKeys(row)));
};

export { getTodo, getTodos, postTodo, deleteTodo, putTodo };