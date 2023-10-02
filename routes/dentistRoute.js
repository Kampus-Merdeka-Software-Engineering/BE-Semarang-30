import express from "express";
import { findAllDentist } from "../controllers/dentistController.js";

const router = express.Router();

router.get("/dentists", findAllDentist);

export default router;
