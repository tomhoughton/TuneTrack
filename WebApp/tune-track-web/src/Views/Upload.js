import React, { Component } from 'react';

// Bootstrap:
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Firebase:
import { getStorage, ref } from 'firebase/storage';

class Upload extends Component {
    constructor (props) {
        super (props)
        
        // Get a reference to the storage service, which is used to create references in your storage bucket.
        const storage = getStorage();

        // Create a storage reference from our storage service:
        const storageRef = ref(storage);

    }

    upload() {
        console.log('upload')
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Card>
                                <Card.Title>Upload a file</Card.Title>
                                <Card.Body>This is a test, if you are developing on this please go into the code and change the file path variable in the upload component</Card.Body>
                                <Button onClick={this.upload}>Upload</Button>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container> 
            </>
        )
    }
}

export default Upload;