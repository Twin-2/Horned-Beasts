import React from 'react';
import { Modal, Button, } from 'react-bootstrap';


class SelectedBeast extends React.Component {


    handleClose = () => this.props.setShow(false);

    render() {
        return (
            <div>
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <img style={{ width: '50%' }} src={this.props.beasts[this.props.imageId].image_url} alt="alt prop"></img>
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