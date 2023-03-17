import app from "./app";
import env from "./utils/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;
//connect to mongo using a check from utils folder to ensure port and mongo fit the catergory
mongoose
	.connect(env.MONGO_CONNECTION_STRING)
	.then(() => {
		console.log("mongoose connected");
		app.listen(port, () => {
			console.log("server is running " + port);
		});
	})
	.catch(console.error);
