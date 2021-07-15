import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';


class SelectedBeast extends React.Component {


    handleClose = () => this.props.setShow(false);

    render() {
        return (
            <div>
                <Modal.Header>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <img src={this.props.beasts[this.props.imageId].image_url} alt="alt prop"></img>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>

                {/* <Card className="float-left" style={{ width: '18rem' }}>
                    <Card.Title>{beastsArray.title}</Card.Title>
                    <Card.Img
                        // onClick={beast.increaseModal}
                        variant="top"
                        src={beastsArray.imageUrl}
                        alt={beastsArray.description} />
                    <Card.Body>
                        <Card.Text>{beastsArray.description}</Card.Text>
                    </Card.Body>
                </Card> */}
            </div>
        )
    }
}

export default SelectedBeast;