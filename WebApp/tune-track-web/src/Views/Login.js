import React, { Component } from 'react';

// Import my components:
import LoginOrSignUp from '../Components/LoginOrSignUp';

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
			password: '',
			isLogin: false,
			isLoginOrSignUp: true
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

			let userInfo = {
				auth: this.auth,
				user: user
			}

			this.props.action(userInfo);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
	}

	setUserAuthentication(arg) {
		
	}

	render () {
		
		let ui;

		if (this.state.isLoginOrSignUp) {
			ui = <LoginOrSignUp action={this.setUserAuthentication}/>
		} else {

		}

		return (
			<Container className='my-auto'>
				<Row>
					<Col></Col>
					<Col>
						{
							ui
						}
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