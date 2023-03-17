import { InferSchemaType, model, Schema } from "mongoose";

const dataSchema = new Schema(
	{
		//titleofRequest
		title: { type: String, required: true },
		//text generatored from cohere
		textGenerated: { type: String },
	},
	//default
	{ timestamps: true }
);

type Data = InferSchemaType<typeof dataSchema>;

export default model<Data>("data", dataSchema);
