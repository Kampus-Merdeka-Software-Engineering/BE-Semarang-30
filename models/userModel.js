import { DataTypes } from "sequelize";
import db from "../config/database.js";

const User = db.define("users", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_username: {
    type: DataTypes.STRING,
  },
  user_email: {
    type: DataTypes.STRING,
  },
  user_password: {
    type: DataTypes.STRING,
  },
});

export default User;
