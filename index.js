import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// import postRoutes from "./routes/posts.js";
import teacherRouter from "./routes/teacherRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use("/", postRoutes);
app.use("/user", teacherRouter);
app.use("/", adminRouter);

app.get("/", (req, res) => {
  res.send("Welcome to online edu forum backend API");
});

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(
        `Server Running on Port: http://localhost:${process.env.PORT}`
      )
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
