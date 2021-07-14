import React from 'react';
import HornedBeasts from './HornedBeasts';
import beastsArray from './data';
import {Carousel} from 'react-bootstrap';

class Main extends React.Component{
    
   
   
    
    render(){
        return(
            <div>
                <Carousel>
                    {beastsArray.map( (value) => <Carousel.Item><HornedBeasts className="d-block w-100" title={value.title} imageUrl={value.image_url} description={value.description} /></Carousel.Item> )}
                </Carousel>
            </div>
        )
    }
}


export default Main;