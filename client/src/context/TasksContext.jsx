import { createContext, useContext, useState } from "react";

import {
  getTasksRequest,
  getTaskByIdRequest,
  deleteTaskRequest,
  createTaskRequest,
  updateTaskRequest,
} from "../api/tasks.api.js";

const TasksContext = createContext();

const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  async function loadTasks() {
    try {
      const res = await getTasksRequest();
      setTasks(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteTask(id) {
    try {
      const res = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function createTask(task) {
    try {
      const res = await createTaskRequest(task);
      // setTasks([...tasks, res.body.task]); // esto añade el nuevo task al final de la lista de tasks que ya existen en el estado
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateTask(id, newTask) {
    try {
      const res = await updateTaskRequest(id, newTask);
      // setTasks(
      //   tasks.map((task) => {
      //     if (task.id === id) {
      //       return res.body.task;
      //     }
      //     return task;
      //   })
      // );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function getTask(id) {
    try {
      const res = await getTaskByIdRequest(id);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <TasksContext.Provider
      value={{ tasks, loadTasks, deleteTask, createTask, updateTask, getTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TaskProvider, useTasks };
