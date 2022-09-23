import { pool } from "../db.js";

const getTasks = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM tasks ORDER BY created_at ASC"
    );
    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.json({
        message: "No tasks found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({
        message: "Task not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [title, description]
    );
    if (rows.affectedRows === 1) {
      res.status(201).json({
        message: "Task created successfully",
        id: rows.insertId,
        body: {
          task: { title, description },
        },
      });
    } else {
      res.status(400).json({
        message: "Something went wrong",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      id,
    ]);
    if (rows.affectedRows === 1) {
      res.status(200).json({
        message: "Task updated successfully",
        body: {
          task: req.body,
        },
      });
    } else {
      res.status(400).json({
        message: "Something went wrong",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
    if (rows.affectedRows === 1) {
      res.status(200).json({
        message: "Task deleted successfully",
      });
    } else {
      res.status(400).json({
        message: "Task not found or something went wrong",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export { getTasks, getTask, createTask, updateTask, deleteTask };
