import { useEffect, useState } from "react";
import { Data } from "./models/data";

export default function App() {
	//grabbing data
	const [data, setData] = useState<Data[]>([]);
	useEffect(() => {
		async function loadData() {
			try {
				const response = await fetch("/api/data/", {
					method: "GET",
				});
				const alldata = await response.json();
				console.log(response);
			} catch (error) {
				console.error(error);
				alert(error);
			}
		}
		loadData();
	}, []);
	return <div className='App'>{JSON.stringify(data)}</div>;
}
