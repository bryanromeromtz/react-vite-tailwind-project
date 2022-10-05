import { config } from "dotenv";

config();

export default {
  PORT: process.env.PORT || 4000,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USERNAME: process.env.DB_USERNAME || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "147258nf3",
  DB_DATABASE: process.env.DB_DATABASE || "tasks_db",
};
