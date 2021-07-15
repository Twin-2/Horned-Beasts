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
    
  
    render() {
        return(
<<<<<<< HEAD
            <div className="container">
                <div className="row align-item-start">
                    <h2 >{this.props.title}</h2>
                    <img 
                        className={this.props.className} 
                        src={this.props.imageUrl} 
                        alt={this.props.description} 
                        title={this.props.title} 
                        onClick={this.liked} 
                    ></img>
                    <span>Hearts: {this.state.likes}</span>
                    <p>{this.props.description}</p>
                </div>
=======
            <div>
                <Card className="float-left" style={{ width: '18rem' }}>
                <Card.Title>{this.props.title}{console.log(this.props.index)}</Card.Title>
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
>>>>>>> 428430f0fa53f14855905f483a41aa06d486e65b
            </div>
            
        )
    }
}

export default HornedBeasts;
