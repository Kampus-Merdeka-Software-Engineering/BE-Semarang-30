import express from "express";
import { findAllSchedule } from "../controllers/scheduleController.js";

const router = express.Router();

router.get("/dentist_schedules", findAllSchedule);

export default router;
