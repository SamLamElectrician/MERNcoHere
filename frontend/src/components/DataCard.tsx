import React from "react";
import styles from "../styles/DataCard.module.css";
import { Data as DataModel } from "../pages/models/data";
import { Card } from "react-bootstrap";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.css";

interface DataProp {
	data: DataModel;
	className?: string;
}

export default function notes({ data, className }: DataProp) {
	const { title, textGenerated, createdAt, updatedAt } = data;
	return (
		<Card className={`${styles.dataCard} ${className}`}>
			<Card.Body className={styles.dataBody}>
				<Card.Title>{title}</Card.Title>
				<Card.Text className={styles.dataText}>{textGenerated}</Card.Text>
				<Card.Footer>{createdAt || updatedAt}</Card.Footer>
			</Card.Body>
		</Card>
	);
}
