//library for validing env variables
//production dependecies
import { cleanEnv } from "envalid";
import { str, port } from "envalid/dist/validators";
//created with envalid package
//made function with other function to check if mongo connection is a string and port is a port
export default cleanEnv(process.env, {
	MONGO_CONNECTION_STRING: str(),
	PORT: port(),
	COHERE: str(),
	// SESSION_SECRET: str(),
});
