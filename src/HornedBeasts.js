import React from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class HornedBeasts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
        }
    }

    increaseModal = () => {
        this.props.displayAsModal(this.props.index)
        this.props.setShow(true)
    }
    
    liked = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }
  
    render() {
        return(
            <div>
                <Card className="float-left bg-info text-black" style={{ width: '18rem' }}>
                <Card.Title>{this.props.title}</Card.Title>
                    <Card.Img 
                        onClick={this.increaseModal}
                        variant="top" 
                        src={this.props.imageUrl} 
                        alt={this.props.description}/>
                    <Card.Body>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Button 
                            variant="primary" 
                            onClick={this.liked}>
                                Hearts: {this.state.likes}
                        </Button>
                    </Card.Body>
                </Card>
            </div>
            
        )
    }
}

export default HornedBeasts;
