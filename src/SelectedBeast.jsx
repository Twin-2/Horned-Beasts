import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';


class SelectedBeast extends React.Component {


    handleClose = () => this.props.setShow(false);

    render() {
        return (
            <div>
                <Modal.Header>
                    <Modal.Title>{this.props.beasts[this.props.imageId].title}</Modal.Title>
                </Modal.Header>
                <img style={{ width: '100%' }} src={this.props.beasts[this.props.imageId].image_url} alt="alt prop"></img>
                <Modal.Body>
                    <p>{this.props.beasts[this.props.imageId].description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </div>
        )
    }
}

export default SelectedBeast;