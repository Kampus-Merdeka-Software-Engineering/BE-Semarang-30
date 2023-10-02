import express from "express";
import {
  findAllTime,
  findDentistSchedulesTime,
} from "../controllers/timeController.js";

const router = express.Router();

router.get("/schedule_times", findAllTime);
router.get("/schedule_times/dentist_schedules", findDentistSchedulesTime);

export default router;
