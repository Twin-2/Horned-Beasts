import React from 'react';
import HornedBeasts from './HornedBeasts';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Main extends React.Component{
    
   
    selectImage = (index) => {
        this.props.displayAsModal(index)
    }

    setShow = (value) => {
        this.props.showModal(value)
    }
    
    

    render(){
        return(
            <div>
                <div >
                    <div className="row text-center"> 
                        {this.props.beasts.map( (beast, idx) => 
                        <div className='beastCards'>
                            <HornedBeasts
                                key={idx}
                                index={idx}
                                title={beast.title} 
                                imageUrl={beast.image_url} 
                                description={beast.description} 
                                displayAsModal={this.selectImage}
                                setShow={this.setShow}
                                horns={beast.horns}
                            />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };
};


export default Main;


                
