import React from 'react';
import HornedBeasts from './HornedBeasts';
import beastsArray from './data';


class Main extends React.Component{
    
   
   
    
    render(){
        return(
            <div>            
                {beastsArray.map( (value) => <HornedBeasts title={value.title} imageUrl={value.image_url} description={value.description} />)}
            </div>
        )
    }
}


export default Main;