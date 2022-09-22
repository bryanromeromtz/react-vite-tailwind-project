import { Router } from "express";
import { pool } from "../db.js";


const router = Router();

router.get("/ping", async (req, res) => {
    const [ rows ] = await pool.query("SELECT * FROM tasks");
    res.json(rows);
    console.log(rows);
    });


export default router;