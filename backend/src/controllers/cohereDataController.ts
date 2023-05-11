import { RequestHandler } from "express";
import DataModel from "../models/data";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import { cohereAPICall } from "../utils/cohere";

//getting all the datta points
export const getAllData: RequestHandler = async (req, res, next) => {
	try {
		//finding the data
		const data = await DataModel.find().exec();
		res.status(200).json(data);
	} catch (error) {
		//calls our error handler
		next(error);
	}
};

//getting one singluar data point
export const getDataPoint: RequestHandler = async (req, res, next) => {
	const dataId = req.params.dataId;
	try {
		if (!mongoose.isValidObjectId(dataId)) {
			throw createHttpError(400, "invalid data ID");
		}
		const data = await DataModel.findById(dataId).exec();
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

interface CreateDataBody {
	title?: string;
	textGenerated?: string;
}

//creating a data point
export const createData: RequestHandler<
	unknown,
	unknown,
	CreateDataBody,
	unknown
> = async (req, res, next) => {
	//getting input of api to put into the server
	const title = req.body.title;
	const text = await cohereAPICall(title);
	try {
		if (!title) {
			//code for argument missing
			throw createHttpError(400, "Data is missing request");
		}

		const newData = await DataModel.create({
			title: title,
			textGenerated: text,
		});
		//201 is new resource created
		res.status(201).json(newData);
	} catch (error) {
		next(error);
	}
};
//interface to update the data point
interface UpdateDataParams {
	dataId: string;
}

interface UpdateDataBody {
	title?: string;
	textGenerated?: string;
}

//maybe not needed to update
export const updateDataPoint: RequestHandler<
	UpdateDataParams,
	unknown,
	UpdateDataBody,
	unknown
> = async (req, res, next) => {
	const dataId = req.params.dataId;
	const newTitle = req.body.title;
	// const newTextGen = req.body.textGenerated;
	try {
		//error handler for invalid data ID
		if (!mongoose.isValidObjectId(dataId)) {
			throw createHttpError(400, "Invalid Data ID");
		}
		//missing params
		if (!newTitle) {
			throw createHttpError(400, "Data must have title");
		}
		const data = await DataModel.findById(dataId).exec();
		if (!data) {
			throw createHttpError(404, "Data missing");
		}

		data.title = newTitle;
		data.textGenerated = await cohereAPICall(newTitle);

		const updatedData = await data.save();

		res.status(200).json(updatedData);
	} catch (error) {
		next(error);
	}
};

export const deleteDataPoint: RequestHandler = async (req, res, next) => {
	const dataId = req.params.dataId;
	try {
		if (!mongoose.isValidObjectId(dataId)) {
			throw createHttpError(400, "Invalid Data ID");
		}
		const data = await DataModel.findById(dataId).exec();
		if (!data) {
			throw createHttpError(404, "Data not found");
		}
		await data.deleteOne();
		res.sendStatus(204);
	} catch (error) {
		next(error);
	}
};
