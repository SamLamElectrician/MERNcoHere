import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Data } from "../pages/models/data";

interface AddDataDialogProps {
	onDismiss: () => void;
	onDataGenerated: (data: Data) => void;
}

export default function AddDataDialog({ onDismiss }: AddDataDialogProps) {
	return (
		<div>
			<Modal show onHide={onDismiss}>
				<Modal.Header closeButton>
					<Modal.Title>Generate a New Point</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form id='generateDataForm'>
						<Form.Group className='mb-3'>
							<Form.Label>What do you want to ask Hery?</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ask a Question'
								as='textarea'
								rows={4}
							></Form.Control>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button type='submit' form='generateDataForm'>
						Generate
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
