// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import helmet from "helmet";
// import http from "http";
// import morgan from "morgan";
// import path from "path";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const http = require("http");
const morgan = require("morgan");
const path = require("path");

// const { ConnectDB } = require("../src/databases");
const routes = require("../src/routes");
const {
    ErrorHandlerMiddleware,
    SendResponseMiddleware
} = require("../src/middlewares");

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
const corsOptions = {
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
app.use(SendResponseMiddleware());

/* API Route */
app.use("/api", routes);

/* Optional route */
app.use("*", (_req, res) => {
    res.sendResponse("error", 404, {
        message: "route not found"
    });
});

/* Error Handler */
app.use(ErrorHandlerMiddleware());

module.exports = app;
