import { RequestHandler } from "express";
import DataModel from "../models/data";

export const getAllData: RequestHandler = async (req, res, next) => {
	try {
		//finding the data for the note
		const data = await DataModel.find().exec();
		res.status(200).json(data);
	} catch (error) {
		//calls our error handler
		next(error);
	}
};

export const getDataPoint: RequestHandler = async (req, res, next) => {
	const dataId = req.params.dataId;
	try {
		const data = await DataModel.findById(dataId).exec();
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

interface CreateDataBody {
	title?: string;
	text?: string;
}

export const createData: RequestHandler<
	unknown,
	unknown,
	CreateDataBody,
	unknown
> = async (req, res, next) => {
	//getting input of api to put into the server
	const title = req.body.title;
	const text = req.body.text;
	try {
		const newData = await DataModel.create({ title: title, text: text });
		//201 is new resource created
		res.send(201).json(newData);
	} catch (error) {
		next(error);
	}
};
