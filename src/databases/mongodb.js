// import mongoose from "mongoose";
const mongoose = require("mongoose");

/**
 * Connect to MongoDB
 * @param url MongoDB URL
 */
async function ConnectDB(url) {
    try {
        await mongoose
            .connect(url)
            .then(() => console.info("MongoDB Connected!"));
    } catch (error) {
        console.error(error);
    }
}

module.exports = ConnectDB;
