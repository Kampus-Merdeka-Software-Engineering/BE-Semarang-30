import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Booking = db.define("user", {
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
  user_phone_number: {
    type: DataTypes.STRING,
  },
  user_password: {
    type: DataTypes.STRING,
  },
});

export default User;

// If table "User doesn't exist", this function creates it
(async () => {
  await db.sync();
})();
