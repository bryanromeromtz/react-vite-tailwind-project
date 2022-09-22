import { pool } from "../db.js";

const getTasks = (req, res) => {
  res.json("getTasks");
};

const getTask = (req, res) => {
  res.json("getTask");
};

const createTask = (req, res) => {
  res.json("createTask");
};

const updateTask = (req, res) => {
  res.json("updateTask");
};

const deleteTask = (req, res) => {
  res.json("deleteTask");
};

export { getTasks, getTask, createTask, updateTask, deleteTask };
