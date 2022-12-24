import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/users.js";
import productsRouter from "./routes/products.js";
import ordersRouter from "./routes/orders.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: process.env.Origin_Cors,
//     methods: ["GET", "POST"],
//   },
// });
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
// app.use(express.json());
app.use(express.json());
app.use(
  express.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000000,
  })
);
app.use(userRouter);
app.use(productsRouter);
app.use(ordersRouter);

console.log(process.env.MONGODB_USERNAME);
const CONNECTION_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.f9gasac.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", false);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port : ${PORT}`))
  )
  .catch((error) => console.log(error));
