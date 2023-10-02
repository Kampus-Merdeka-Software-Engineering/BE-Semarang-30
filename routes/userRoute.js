import express from "express";
import { signUpUser, findAllUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/users", signUpUser);
router.get("/users", findAllUser);

export default router;
