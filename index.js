import "dotenv/config.js";
import express from "express";
import cors from "cors";
import db from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import dentistRoute from "./routes/dentistRoute.js";
import dateRoute from "./routes/dateRoute.js";
import timeRoute from "./routes/timeRoute.js";
import scheduleRoute from "./routes/scheduleRoute.js";
import appointmentRoute from "./routes/appointmentRoute.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

// Route
app.use(userRoute);
app.use(dentistRoute);
app.use(dateRoute);
app.use(timeRoute);
app.use(scheduleRoute);
app.use(appointmentRoute);

// db.sync() is to synchronize all models at once
db.sync({ alter: true })
  .then(() => {
    console.log("Databse connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(`Unable to connect to database ${error}`));
