import React from "react";
import styles from "../styles/DataCard.module.css";
import { Data as DataModel } from "../pages/models/data";
import { Card } from "react-bootstrap";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.css";

interface DataProp {
	data: DataModel;
}

export default function notes({ data }: DataProp) {
	const { title, textGenerated, createdAt, updatedAt } = data;
	return (
		<Card className={styles.dataCard}>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text className={styles.dataText}>{textGenerated}</Card.Text>
				<Card.Footer>{createdAt || updatedAt}</Card.Footer>
			</Card.Body>
		</Card>
	);
}
