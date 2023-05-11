import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Data } from "../pages/models/data";
import { useForm } from "react-hook-form";
import { DataInput } from "../network/data_api";
import * as DataApi from "../network/data_api";

interface AddDataDialogProps {
	onDismiss: () => void;
	onDataGenerated: (data: Data) => void;
}

export default function AddDataDialog({
	onDismiss,
	onDataGenerated,
}: AddDataDialogProps) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<DataInput>();

	async function onSubmit(input: DataInput) {
		try {
			const dataResponse = await DataApi.createDataCard(input);
			onDataGenerated(dataResponse);
		} catch (error) {
			console.log("bananas");
			console.log(error);
			console.error(error);
			alert(error);
		}
	}

	return (
		<div>
			<Modal show onHide={onDismiss}>
				<Modal.Header closeButton>
					<Modal.Title>Generate a New Point</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form id='generateDataForm' onSubmit={handleSubmit(onSubmit)}>
						<Form.Group className='mb-3'>
							<Form.Label>What do you want to ask Hery?</Form.Label>
							<Form.Control
								type='text'
								placeholder='Ask a Question'
								as='textarea'
								rows={4}
								isInvalid={!!errors.title}
								{...register("title", { required: "Required" })}
							></Form.Control>
							<Form.Control.Feedback type='invalid'>
								{errors.title?.message}
							</Form.Control.Feedback>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button type='submit' form='generateDataForm' disabled={isSubmitting}>
						Generate
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
