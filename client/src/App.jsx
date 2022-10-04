import { Routes, Route } from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TaskForm";
import NotFound from "./pages/404NotFound";

import NavBar from "./components/NavBar";

import { TaskProvider } from "./context/TasksContext";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<TasksPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/new" element={<TasksForm />} />
          <Route path="/tasks/edit/:id" element={<TasksForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskProvider>
    </div>
  );
}

export default App;
