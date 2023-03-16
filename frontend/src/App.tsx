import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Generator from './pages/Generator';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import SignUpModal from './components/SignUpModal';

function App() {
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	//controls login
	const [showLoginModal, setLoginModal] = useState(false);
	return (
		<BrowserRouter>
			<div>
				<NavBar />
				<Container>
					<Routes>
						<Route path='/' element={<Generator />}></Route>
					</Routes>
				</Container>
				<SignUpModal onDismiss={() => {}} onSignUpSuccessful={() => {}} />
			</div>
		</BrowserRouter>
	);
}

export default App;
