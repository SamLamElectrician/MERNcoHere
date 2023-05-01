import React from "react";
import styles from "../styles/DataCard.module.css";
import { Data as DataModel } from "../pages/models/data";
import { Card } from "react-bootstrap";
import { formatDate } from "../utils/formatData";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.css";

interface DataProp {
	data: DataModel;
	className?: string;
}

export default function notes({ data, className }: DataProp) {
	const { title, textGenerated, createdAt, updatedAt } = data;

	let createdUpdatedText: string;
	if (updatedAt > createdAt) {
		createdUpdatedText = "Updated: " + formatDate(updatedAt);
	} else {
		createdUpdatedText = "Created : " + formatDate(createdAt);
	}

	return (
		<Card className={`${styles.dataCard} ${className}`}>
			<Card.Body className={styles.dataBody}>
				<Card.Title>{title}</Card.Title>
				<Card.Text className={styles.dataText}>{textGenerated}</Card.Text>
			</Card.Body>
			<Card.Footer className='text-muted'>{createdUpdatedText}</Card.Footer>
		</Card>
	);
}
