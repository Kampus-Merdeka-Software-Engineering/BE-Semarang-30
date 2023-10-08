import express from "express";

import {
  signUpUser,
  findUser,
  findUserEmail,
  loginUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", signUpUser);
router.get("/users", findUser);
router.get("/users/email", findUserEmail);
router.get("/users/login", loginUser);

export default router;
