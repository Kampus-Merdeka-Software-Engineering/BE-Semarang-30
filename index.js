import "dotenv/config.js";
import express from "express";
import cors from "cors";
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
