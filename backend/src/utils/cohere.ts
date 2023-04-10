import { init, generate } from "cohere-ai";
import env from "./validateEnv";

//validating env is a string,

export async function cohere(): Promise<void> {
	try {
		await init(env.COHERE);
		const response = await generate({
			model: "xlarge",
			prompt: "Write a LinkedIn post about starting a career in tech:",
			max_tokens: 300,
			temperature: 0.9,
			k: 0,
			stop_sequences: [],
			return_likelihoods: "NONE",
		});
	} catch (error) {
		console.error("Failed to generate Link");
	}
}
