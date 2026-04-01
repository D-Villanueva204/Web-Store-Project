import express, {Express} from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import corsOptions from "../config/cors";
import setupSwagger from "../config/swagger";
import productRoutes from "../src/api/v1/routes/productRoutes"
import errorHandler from "./api/v1/middleware/errorHandler";

const app: Express = express();

dotenv.config();

app.use(morgan("combined"));

app.use(express.json());

app.use(cors(corsOptions));

setupSwagger(app);

app.get("/", (_req, res) => {
    res.send("Got response from backend!");
});

// use termRoutes
app.use("/api/v1", productRoutes);

app.use(errorHandler);

export default app;