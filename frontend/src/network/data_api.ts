import { Data } from "../pages/models/data";

//front end error handling
async function fetchData(input: RequestInfo, init?: RequestInit) {
	const response = await fetch(input, init);
	if (response.ok) {
		return response;
	} else {
		const errorBody = await response.json();
		const errorMessage = errorBody.error;
		throw Error(errorMessage);
	}
}

// api call to get all data points from API
export async function fetchDataCard(): Promise<Data[]> {
	const response = await fetchData("http://localhost:5000/api/data/", {
		method: "GET",
	});
	return response.json();
}

//creating notes
export interface DataInput {
	title: string;
}
export async function createDataCard(data: DataInput): Promise<Data> {
	const response = await fetchData("/api/notes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	return response.json();
}
