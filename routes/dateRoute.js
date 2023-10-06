import express from "express";
import { findAllDate } from "../controllers/dateController.js";

const router = express.Router();

router.get("/schedule_dates", findAllDate);

export default router;
