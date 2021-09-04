import React, { Component } from 'react';

// Bootstrap Components:
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class LoginOrSignUp extends Component {
	constructor (props) {
		super (props);

		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleSignUpClick = this.handleSignUpClick.bind(this);
		
	}

	handleLoginClick() {
		
	}

	handleSignUpClick() {

	}

	render() {
		return (
			<>
				<h1>Welcome to Tune Track</h1>
				<Card>
					<Button onClick={this.handleLoginClick}>Login</Button>
					<Button onClick={this.handleSignUpClick}>SignUp</Button>
				</Card>
			</>
		);
	}
}

export default LoginOrSignUp;