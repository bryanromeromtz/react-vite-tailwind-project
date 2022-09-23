import { Routes, Route } from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TaskForm";
import NotFound from "./pages/404NotFound";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<TasksPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/new" element={<TasksForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
