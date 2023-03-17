import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import DataModel from "./models/data";
import dataRoutes from "./routes/coHereDataRoute";

const app = express();

app.use("/api/data", dataRoutes);

//error handler for non endpoint link
app.use((req, res, next) => {
	next(Error("Endpoint not found"));
});

//error handler to keep it DRY
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
	let errorMessage = "an unknown error has occured";
	//checks if error is an Error Type

	if (error instanceof Error) {
		//set error message as eerror message
		errorMessage = error.message;
	}
	//send back a 500 and send back json
	res.status(500).json({ error: errorMessage });
});

export default app;
