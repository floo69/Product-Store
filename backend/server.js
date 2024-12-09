import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import productroutes from "./routes/product.js"

const app = express();

app.use(express.json());

app.use("/api/products", productroutes)


const port = process.env.PORT || 8000;

app.listen(port, () => {
  connectDB();
  console.log(`Server started at ${port}`);
});
