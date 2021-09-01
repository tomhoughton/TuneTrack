import React, { Component } from 'react';

// Bootstrap Components:
import Button from 'react-bootstrap/Button';

class Home extends Component {
    constructor (props) {
        super (props)
    }

    render() {
        return(
            <>
                <h1>Hello {'hello'}</h1>
                <Button>Upload a song</Button>
            </>
        )
    }
}

export default Home;
