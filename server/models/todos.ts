import pool from "../dbConfig/dbConfig.js";

// app.post("/todos", async (req, res) => {
//   try {
//     const { description } = req.body;
//     const newTodo = await pool.query(
//       "INSERT INTO todo (description) VALUES($1) RETURNING *",
//       [description]
//     );

//     res.json(newTodo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

function getTodo() {
  async (req, res) => {
  try {
    const { id } = req.params;
    const fetchTodo = pool.query("SELECT * FROM todo WHERE todo_id = $1", [
        id
      ]);

      res.json(fetchTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  }
};

function getTodos() {
  return pool.query("SELECT * from todos");
};

function postTodo() {
  async (req, res) => {
    try {
      const { description } = req.body;
      const newTodo = pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
          [description]
      );

      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  }
};

function putTodo() {
  async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updateTodo = pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
          [description, id]);

          res.json(updateTodo.rows[0]);
        } catch (err) {
          console.error(err.message);
        }
      }
    };

function deleteTodo() {
  async (req, res) => {
    try {
    const { id } = req.params;
    const destroyTodo = pool.query("DELETE FROM todo WHERE todo_id = $1", [
        id
      ]);

      res.json(destroyTodo.rows[0]);
        } catch (err) {
          console.error(err.message);
        }
      }
    };



export { getTodo, getTodos, postTodo, putTodo, deleteTodo };