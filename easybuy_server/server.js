import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 3001;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`METHOD: ${req.method}`);
    console.log(`PATH: ${req.path}`);
    console.log(`BODY: ${req.body}`);
    console.log(`QUERY: ${req.query}`);
    console.log(`PARAMS: ${req.params}`);
    next();
});

const connectMongoose = async () => {
    await mongoose.connect(
        "mongodb://localhost:27017/libraryDB"
    );
}
await connectMongoose();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});