import { Form, Modal, Button, Alert } from 'react-bootstrap';
import TextInputField from './form/TextInputField';
import { useForm } from 'react-hook-form';
import styleUtils from '../styles/utils.module.css';

interface SignUpModalProps {
	onDismiss: () => void;
	onSignUpSuccessful: () => void;
}
export default function SignUpModal({
	onDismiss,
	onSignUpSuccessful,
}: SignUpModalProps) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<any>();

	return (
		<Modal show onHide={onDismiss}>
			<Modal.Header>
				<Modal.Title>Sign Up</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{/* {errorText && <Alert variant='danger'> {errorText}</Alert>} */}
				<Form>
					{/* onSubmit={handleSubmit(onSubmit)}> */}
					<TextInputField
						name='username'
						label='Username'
						type='text'
						placeholder='Username'
						register={register}
						registerOptions={{ required: 'Required' }}
						// error={errors.username}
					/>
					<TextInputField
						name='email'
						label='Email'
						type='email'
						placeholder='Email'
						register={register}
						registerOptions={{ required: 'Required' }}
						// error={errors.email}
					/>
					<TextInputField
						name='password'
						label='Password'
						type='password'
						placeholder='Password'
						register={register}
						registerOptions={{ required: 'Required' }}
						// error={errors.password}
					/>
					<Button
						type='submit'
						disabled={isSubmitting}
						className={styleUtils.width100}
					>
						Sign Up
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	);
}