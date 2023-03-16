import { Schema } from "mongoose";

const dataSchema = new Schema(
	{
		title: { type: String },
		text: { type: String },
	},
	{ timestamps: true }
);
