// import { Router } from "express";
const { Router } = require("express");

const router = Router();

router.get("/", (_req, res) => {
    res.sendResponse("success", 200, {
        message: "Welcome to the API"
    });
});

module.exports = router;
