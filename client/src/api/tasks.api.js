import axios from "axios";

const createTaskRequest = async (task) => {
  const response = await axios.post("http://localhost:4000/api/tasks", task);
  return response.data;
};

const getTasksRequest = async () => {
  const response = await axios.get("http://localhost:4000/api/tasks");
  return response.data;
};

const getTaskByIdRequest = async (id) => {
  const response = await axios.get(`/api/tasks/${id}`);
  return response.data;
};

const updateTaskRequest = async (task) => {
  const response = await axios.put(`/api/tasks/${task.id}`, task);
  return response.data;
};

const deleteTaskRequest = async (id) => {
  const response = await axios.delete(`http://localhost:4000/api/tasks/${id}`);
  return response.data;
};

export {
  createTaskRequest,
  getTasksRequest,
  getTaskByIdRequest,
  updateTaskRequest,
  deleteTaskRequest,
};
