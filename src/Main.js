import React from 'react';
import HornedBeasts from './HornedBeasts';
import 'bootstrap/dist/css/bootstrap.css';

class Main extends React.Component{
    
   
    selectImage = (index) => {
        this.props.displayAsModal(index)
    }

    setShow = (value) => {
        this.props.showModal(value)
    }
    
    render(){
        return(
<<<<<<< HEAD
            <div>
                <Carousel variant="dark">
                    {beastsArray.map( (value, idx) => 
                        <Carousel.Item>
                            <HornedBeasts 
                                key={idx}
                                className="d-block w-100" 
                                title={value.title} 
                                imageUrl={value.image_url} 
                                description={value.description} />
                        </Carousel.Item>
                         )}
                </Carousel>
=======
            <div className="container">
                <div className="row text-center"> 
                    {this.props.beasts.map( (beast, idx) => 
                       <div>
                        <HornedBeasts
                            
                            key={idx}
                            index={idx}
                            title={beast.title} 
                            imageUrl={beast.image_url} 
                            description={beast.description} 
                            displayAsModal={this.selectImage}
                            setShow={this.setShow}
                        />
                        </div>
                    )}
                </div>
>>>>>>> 428430f0fa53f14855905f483a41aa06d486e65b
            </div>
        );
    };
};


export default Main;


<<<<<<< HEAD
export default Main;

=======
                
>>>>>>> 428430f0fa53f14855905f483a41aa06d486e65b
