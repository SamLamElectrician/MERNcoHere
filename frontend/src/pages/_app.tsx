import { useEffect, useState } from "react";
import { Data } from "./models/data";

export default function App() {
	//grabbing data
	const [data, setData] = useState<Data[]>([]);
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
	return <div className='App'>{JSON.stringify(data)}</div>;
}
