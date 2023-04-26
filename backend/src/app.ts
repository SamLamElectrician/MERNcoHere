import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";

import dataRoutes from "./routes/coHereDataRoute";
import morgan from "morgan";
import createHttpError, { isHttpError } from "http-errors";
import cors from "cors";

const app = express();

const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
	origin: allowedOrigins,
};
app.use(cors(options));
app.use(morgan("dev"));
//allows app to read and write json to server
app.use(express.json());

//redirects an routes to this endpoint
app.use("/api/data", dataRoutes);

//error handler for non endpoint link
app.use((req, res, next) => {
	//creating custom end point for errors
	next(createHttpError(404, "Endpoint not found"));
});

//error handler to keep it DRY
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
	let errorMessage = "an unknown error has occured";
	let statusCode = 500;
	//checks if error is an Error Type

	//check if error is instance of http error package
	if (isHttpError(error)) {
		//.status is from http error package
		statusCode = error.status;
		errorMessage = error.message;
	}
	//send back a 500 and send back json
	res.status(statusCode).json({ error: errorMessage });
});

export default app;
