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
            <div class="container">
                <div class="row align-item-start">
                    <h2 class="">{this.props.title}</h2>
                    <img src={this.props.imageUrl} alt={this.props.description} title={this.props.title} onClick={this.liked} class="rounded float-left" ></img>
                    <span>Hearts: {this.state.likes}</span>
                    <p>{this.props.description}</p>
                </div>
            </div>
            
        )
    }
}

export default HornedBeasts;