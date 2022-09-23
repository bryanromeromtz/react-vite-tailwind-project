import React from "react";
import { useEffect, useState, useContext } from "react";

import { getTasksRequest } from "../api/tasks.api.js";
import TaskCard from "../components/TaskCard.jsx";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(text);
    async function loadTasks() {
      try {
        const res = await getTasksRequest();
        setTasks(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    loadTasks();
  }, []);
  function renderTasks() {
    if (tasks.length > 0) {
      return tasks.map((task) => <TaskCard key={task.id} task={task} />);
    } else {
      return <h2>{tasks.message}</h2>;
    }
  }
  return (
    <div>
      <h1>Tasks Page</h1>
      {renderTasks()}
    </div>
  );
}

export default TasksPage;
