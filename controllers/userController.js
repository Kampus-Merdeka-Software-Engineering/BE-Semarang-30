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

// login user
export const loginUser = async (req, res) => {
  try {
    const { user_email, user_password } = req.query;
    const result = await User.sequelize.query(
      "SELECT * FROM users WHERE user_email = ? AND user_password = ?",
      {
        replacements: [user_email, user_password],
        type: QueryTypes.SELECT,
      }
    );

    if (result.length > 0) {
      // Store user_id in the session
      req.session.user_id = result[0].user_id;
      req.session.save((err) => {
        if (err) {
          // Handle session save error
        } else {
          // Session saved successfully
          console.log("hiii", req.session.user_id);

          res.status(200).json({
            message: "Login successful",
            user_id: req.session.user_id,
          });
        }
      });
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
    console.log("asdasd", req.session.user_id);

    if (req.session.user_id) {
      // User is logged in
      console.log("asdasd", req.session.user_id);
      res.json({
        message: `there is a user ${req.session.user_id}`,
        loggedIn: true,
        user_id: req.session.user_id,
      });
    } else {
      // User is not logged in
      res.json({
        loggedIn: false,
      });
    }
  } catch (error) {
    res.send(error.message);
  }
};
