import React from 'react';

// Bootstrap components:
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
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
								<Form.Control type='email' placeholder='Enter email'/>
							</Form.Group>
							<Form.Group className='mb-3' controlId='formBasicPassword'>
								<Form.Label>Password</Form.Label>
								<Form.Control type='password' placeholder='Password'/>
							</Form.Group>
						</Form>
						<Row>
							<Col>
								<Button variant='primary'>Sign In</Button>
							</Col>
							<Col>
								<Button variant='secondary'>Sign Up</Button>
							</Col>
						</Row>
					</Card>
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
}

export default Login;

// Things
// Change background Color