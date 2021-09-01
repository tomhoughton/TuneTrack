import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

// Import my component.
import Login from './Views/Login';
import Home from './Views/Home';

// Firebase components:
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth';


// Bootstrap:
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class  App extends Component {

  constructor(props) {
    super (props);

    this.state = {
      view: 'login',
      userInfo: {
        auth: null,
        user: null
      }
    }

    this.userHandler = this.userHandler.bind(this);

  }

  userHandler(arg) {
    // Pass as a prop

    let stateUser = {
      auth: arg.auth,
      user: arg.user
    }

    console.log(stateUser);

    this.setState(state => ({
      view: 'home',
      userInfo: {
        auth: arg.auth,
        user: arg.user
      }
    }));

    console.log(this.state.view);
    console.log(this.state.userInfo);

  }

  render() {

    document.title = 'Tune Track'

    let ui;

    if (this.state.view === 'login') {
      ui = <Login action={this.userHandler}/>
    } else if (this.state.view === 'home') {
      ui = <Home />
    }


    return (
      <>
        <Navbar style={{ backgroundColor: '#30404D' }} className='text-white'>
            <Navbar.Brand style={{ color: '#ffffff' }}>Tune Track</Navbar.Brand>
            <Nav className="mr-auto">
              <Button className="navButton" style={{ paddingRight: '5px'}} variant="primary" onClick={this.handleHomeClick}>Home</Button>
              <Button className="navButton" style={{ paddingRight: '5px' }} variant="primary" onClick={this.handleCompareClick}>Upload</Button>
              <Button className="navButton" style={{ paddingRight: '5px' }} variant="info" onClick={this.handleAboutClick}>Account</Button>
              <Button className="navButton" style={{ paddingRight: '5px' }} variant="info" onClick={this.handleSetHomeClick}>About</Button>
            </Nav>
          </Navbar>
          {
            ui
          }
      </>
    );
  }

  
}

export default App;
