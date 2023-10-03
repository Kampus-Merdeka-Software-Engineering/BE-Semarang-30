import express from "express";
import {
  findAppointment,
  createAppointment,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/appointments", createAppointment);
router.get("/appointments", findAppointment);

export default router;
