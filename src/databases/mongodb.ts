import mongoose from "mongoose";

/**
 * Connect to MongoDB
 * @param url MongoDB URL
 */
export async function ConnectDB(url: string) {
    try {
        await mongoose
            .connect(url)
            .then(() => console.info("MongoDB Connected!"));
    } catch (error) {
        console.error(error);
    }
}
