import express from "express";
import config from "./config.js";
import morgan from "morgan";

import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

// Settings
app.set("port", config.PORT);

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(indexRoutes);
app.use("/api", tasksRoutes);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
