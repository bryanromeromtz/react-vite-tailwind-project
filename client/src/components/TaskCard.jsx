import React from "react";
import { useNavigate } from "react-router-dom";

import { useTasks } from "../context/TasksContext.jsx";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "Done 👍" : "Not Done ❌"}</span>
      <span>{task.created_at}</span>
      {/* edita task */}
      <button onClick={() => navigate(`/tasks/edit/${task.id}`)}>Edit</button>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
