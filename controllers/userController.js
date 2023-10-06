import User from "../models/userModel.js";
import { QueryTypes } from "sequelize";

// user register
export const signUpUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).json({ msg: "User created" });
  } catch (error) {
    res.send(error.message);
  }
};

// find user
export const findUser = async (req, res) => {
  try {
    const { user_id } = req.query;
    const result = await User.findOne({
      where: { user_id: user_id },
      attributes: { exclude: ["user_password"] },
    });
    res.status(200).json(result);
  } catch (error) {
    res.send(error.message);
  }
};

// find user
export const findUserEmail = async (req, res) => {
  try {
    const { user_email } = req.query;
    const result = await User.findOne({
      where: { user_email: user_email },
      attributes: { exclude: ["user_password"] },
    });
    res.status(200).json(result);
  } catch (error) {
    res.send(error.message);
  }
};

// login user
export const loginUser = async (req, res) => {
  try {
    const { user_email, user_password } = req.query;
    const result = await User.findOne({
      where: { user_email: user_email, user_password: user_password },
    });

    if (result) {
      console.log(result.user_id);
      req.session.user_id = result.user_id;
      console.log(req.session.user_id);
      res.status(200).json({
        message: "Login successful",
        user_id: req.session.user_id,
      });
      console.log(req.session.user_id);
    } else {
      res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    res.send(error.message);
  }
};

// logout user
export const logoutUser = async (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.send(error.message);
  }
};

// check if logged in
export const checkLogin = async (req, res) => {
  try {
    if (req.session.user_id) {
      const userIdFromSession = req.session.user_id;
      // Now you can use userIdFromSession as needed in this route
      res.json({
        message: `User ID from session: ${userIdFromSession}`,
        user_id: userIdFromSession,
      });
    } else {
      // User is not logged in
      res.json({
        message: `User is not logged in`,
      });
      console.log("asdas");
    }
  } catch (error) {
    res.send(error.message);
  }
};
