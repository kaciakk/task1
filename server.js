import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";

// routers
import campaignRouter from "./routes/campaignRouter.js";

// middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/v1/campaigns", campaignRouter);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running... on PORT: ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
