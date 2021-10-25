import express from "express";
import path from "path";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
const port = process.env.PORT;
const app = express();
import userRoutes from "./routes/userRoutes.js";

connectDb();

app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/", (req, res) => {
  res.send("Health Ok");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold);
});
