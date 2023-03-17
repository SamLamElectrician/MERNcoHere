import express from "express";
import "dotenv/config";
import DataModel from "./models/data";

const app = express();

//getting data for previous calls to the generator
app.get("/", async (req, res) => {
	//finding the data for the note
	const data = await DataModel.find().exec();
	res.status(200).json(data);
});

export default app;
