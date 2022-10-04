import React from "react";
import { useEffect } from "react";

import TaskCard from "../components/TaskCard.jsx";
import { useTasks } from "../context/TasksContext.jsx";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
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
