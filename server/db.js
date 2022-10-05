import { createPool } from "mysql2/promise";
import config from "./config.js";

export const pool = createPool({
  host: config.DB_HOST,
  user: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  port: config.DB_PORT,
});
