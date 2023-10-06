import express from "express";

import {
  signUpUser,
  findUser,
  findUserEmail,
  loginUser,
  logoutUser,
  checkLogin,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/users", signUpUser);
router.get("/users", findUser);
router.get("/users/email", findUserEmail);
router.get("/users/login", loginUser);
router.get("/users/logout", logoutUser);
router.get("/users/check-login", checkLogin);

export default router;
