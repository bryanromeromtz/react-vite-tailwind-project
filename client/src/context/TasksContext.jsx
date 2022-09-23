import { createContext, useContext } from "react";

const TasksContext = createContext();

const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};

const TaskProvider = ({ children }) => {
  return (
    <TasksContext.Provider value={{ text: "fdfdghfdghfdgh" }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
