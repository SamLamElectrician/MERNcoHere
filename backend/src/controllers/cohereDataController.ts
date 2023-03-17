import { RequestHandler } from "express";
import DataModel from "../models/data";

export const getData: RequestHandler = async (req, res, next) => {
	try {
		//finding the data for the note
		const data = await DataModel.find().exec();
		res.status(200).json(data);
	} catch (error) {
		//calls our error handler
		next(error);
	}
};
