import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component{
    render(){
        return(
            <div>
                <HornedBeasts title="Spiney Devil" imageUrl="Lots of horns" description="lots of horns"/>
                <HornedBeasts title="dragon" imageUrl="DND" description="breathes fire"/>
            </div>
        )
    }
}


export default Main;