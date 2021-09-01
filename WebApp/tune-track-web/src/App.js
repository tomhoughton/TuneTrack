import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// Import my component.
import Login from './Views/Login';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class  App extends Component {

  constructor(props) {
    super (props);

    this.state = {
      view: 'login'
    }

  }

  render() {

    document.title = 'Tune Track'

    let ui;

    if (this.state.view ==='login') {
      ui = <Login />
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
