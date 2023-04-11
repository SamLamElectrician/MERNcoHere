import cohere from "cohere-ai";
import env from "./validateEnv";

//validating env is a string,

export async function cohereAPICall(title: any): Promise<string> {
	try {
		cohere.init(env.COHERE);
		const response = await cohere.generate({
			model: "xlarge",
			prompt: title,
			max_tokens: 500,
			temperature: 0.9,
			k: 0,
			stop_sequences: [],
			return_likelihoods: "NONE",
		});
		return response.body.generations[0].text;
	} catch (error) {
		console.error("Failed to generate Link");
		return "";
	}
}
