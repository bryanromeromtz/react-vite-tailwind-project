import express from "express";
import config from "./config.js";
import morgan from "morgan";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

// Settings
app.set("port", config.PORT);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(express.static(join(__dirname, "../client/dist")));
app.use(indexRoutes);
app.use("/api", tasksRoutes);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
