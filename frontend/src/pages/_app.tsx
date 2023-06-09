import "../styles/global.css";
import { useEffect, useState } from "react";
import { Data as DataModel } from "./models/data";
import DataCard from "../components/DataCard";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../styles/dataCardPage.module.css";
import * as DataApi from "../network/data_api";
import AddDataDialog from "../components/AddDataDialog";

export default function App() {
	//grabbing data
	const [data, setData] = useState<DataModel[]>([]);
	const [showAddDataDialog, setShowAddDataDialog] = useState(false);

	useEffect(() => {
		async function loadData() {
			try {
				const alldata = await DataApi.fetchDataCard();
				setData(alldata);
			} catch (error) {
				console.error(error);
				alert(error);
			}
		}
		loadData();
	}, []);
	return (
		<Container className='App'>
			<Button onClick={() => setShowAddDataDialog(true)}>
				Generate New Data
			</Button>
			<Row xs={1} md={2} xl={3} className='g-4'>
				{data.map((datapoint) => (
					<Col key={datapoint._id}>
						<DataCard data={datapoint} className={styles.data} />
					</Col>
				))}
			</Row>
			{showAddDataDialog && (
				<AddDataDialog
					onDismiss={() => setShowAddDataDialog(false)}
					onDataGenerated={(newDataPoint) => {
						setData([...data, newDataPoint]);
						setShowAddDataDialog(false);
					}}
				/>
			)}
		</Container>
	);
}
