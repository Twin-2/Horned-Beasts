import React from 'react';

class HornedBeasts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
    }

    liked = () => {
        this.setState({ likes: this.state.likes + 1})
    }
    
    render() {
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} onClick={this.liked}></img>
                <span>Hearts: {this.state.likes}</span>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts;