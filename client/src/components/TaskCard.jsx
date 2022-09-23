import React from "react";
import { deleteTaskRequest } from "../api/tasks.api.js";

function TaskCard({ task }) {
  const handleDelete = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "Done 👍" : "Not Done ❌"}</span>
      <span>{task.created_at}</span>
      <button
        onClick={() => {
          handleDelete(task.id);
        }}
      >
        Delete
      </button>
      <button>Delete</button>
    </div>
  );
}

export default TaskCard;
