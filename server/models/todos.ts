import pool from "../dbConfig/dbConfig.js";

function getTodo() {
	const { id } = req.params;
  return pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id
    ])
};

function getTodos() {
  return pool.query("SELECT * from todos");
};

function postTodo() {
	const { description } = req.body;
  return pool.query(
	"INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
	)
};

function putTodo() {
	const { id } = req.params;
  const { description } = req.body;
  return pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id])
};

function deleteTodo() {
  const { id } = req.params;
	return pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id
    ])
};

export { getTodo, getTodos, postTodo, putTodo, deleteTodo };