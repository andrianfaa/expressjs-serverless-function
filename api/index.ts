/// <reference types="../express-env" />

import bodyParser from "body-parser";
import cors, { type CorsOptions } from "cors";
import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import helmet from "helmet";
import http from "http";
import morgan from "morgan";
import path from "path";

import {
    ErrorHandlerMiddleware,
    SendResponseMiddleware
} from "../src/middlewares";
import routes from "../src/routes";
// import { ConnectDB } from "../src/databases";

// Load environment variables
dotenv.config({
    path: path.resolve(
        process.cwd(),
        "config",
        process.env.NODE_ENV === "dev" ? ".env.development" : ".env"
    )
});

// Connect MongoDB
// ConnectDB(process.env.MONGODB_URI || "");

const app = express();
const server = http.createServer(app);
const corsOptions: CorsOptions = {
    origin: "*"
};

/* Express Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(SendResponseMiddleware);

/* API Route */
app.use("/api", routes);

/* Optional route */
app.use("*", (_req: Request, res: Response) => {
    res.sendResponse("error", 404, {
        message: "route not found"
    });
});

/* Error Handler */
app.use(ErrorHandlerMiddleware());

export default server;
