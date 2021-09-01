import React, { Component } from 'react';

// Bootstrap components:
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Firebase components:
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

class Login extends Component {

	constructor(props) {
		super (props);

		this.state = {
			email: '',
			password: ''
		}

		this.handleSignUpClick = this.handleSignUpClick.bind(this);
		this.handleSignInClick = this.handleSignInClick.bind(this);

		this.auth = getAuth();
	}

	handleSignUpClick() {
		
		createUserWithEmailAndPassword(this.auth, this.state.email, this.state.password).then((userCredential) => {
			const user = userCredential.user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		})
	}

	handleSignInClick() {
		console.log('sign in')
		signInWithEmailAndPassword(this.auth, this.state.email, this.state.password).then((userCredential) => {
			const user = userCredential.user;
			console.log(user.email);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		})
	}

	render () {
		return (
			<Container className='my-auto'>
				<Row>
					<Col></Col>
					<Col>
						<h1>Sign in</h1>
					</Col>
					<Col></Col>
				</Row>
				<Row>
					<Col></Col>
					<Col>
						<Card>
							<Form>
								<Form.Group className='mb-3' controlId='formBasicEmail'>
									<Form.Label>Email Address</Form.Label>
									<Form.Control 
										type='email' 
										placeholder='Enter email'
										value={this.state.email}
										onChange={e => this.setState({ email: e.target.value })}
										/>
								</Form.Group>
								<Form.Group className='mb-3' controlId='formBasicPassword'>
									<Form.Label>Password</Form.Label>
									<Form.Control 
									type='password' 
									placeholder='Password'
									value={this.state.password}
									onChange={e => this.setState({ password: e.target.value})}
								/>
								</Form.Group>
							</Form>
							<Row>
								<Col>
									<Button variant='primary' onClick={this.handleSignInClick}>Sign In</Button>
								</Col>
								<Col>
									<Button variant='secondary' onClick={this.handleSignUpClick}>Sign Up</Button>
								</Col>
							</Row>
						</Card>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		);
	}
}

export default Login;

// Things
// Change background Color