import "../styles/global.css";
import { useEffect, useState } from "react";
import { Data as DataModel } from "./models/data";
import DataCard from "../components/DataCard";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
	//grabbing data
	const [data, setData] = useState<DataModel[]>([]);
	useEffect(() => {
		async function loadData() {
			try {
				const response = await fetch("http://localhost:5000/api/data/", {
					method: "GET",
				});
				const alldata = await response.json();
				console.log(response);
				setData(alldata);
			} catch (error) {
				console.error(error);
				alert(error);
			}
		}
		loadData();
	}, []);
	return (
		<div className='App'>
			{data.map((datapoint) => (
				<DataCard data={datapoint} key={datapoint._id} />
			))}
		</div>
	);
}
