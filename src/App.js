import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import SelectedBeast from './SelectedBeast';
import beastsArray from './data';
import 'bootstrap/dist/css/bootstrap.css';
import {Modal} from 'react-bootstrap';
import Forms from './Form';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: beastsArray,
      show: false,
      imageId: 0,
      selectedHorns: 0
    }
  }

  setShow = (input) => {
    this.setState({
      show: input
    })
  }
  
  selectImage = (index) => {
    this.setState({
      imageId: index
    })
  };

  selectedHorns = (value) => {
    this.setState({
      selectedHorns: parseInt(value)
    })
  }


  handleClose = () => this.setShow(false);
  handleShow = () => this.setShow(true);

  filterBeasts = () => {
    let filteredBeasts = beastsArray.filter( (beast, idx) => beast.horns === this.state.selectedHorns)
    this.setState({
        data: filteredBeasts
    })
  }


  render() {
    return (
      <div className="row text-center">
        <Header id='header'/>
        <Forms 
          reset={this.resetBeasts} 
          selectedHorns={this.selectedHorns} 
          filter={this.filterBeasts}/>
        <Main 
          id='main'
          beasts={this.state.data}
          isShowing={this.state.show}
          displayAsModal={this.selectImage}
          showModal={this.setShow}/>
        <Footer id='footer'/>
        <Modal 
          show={this.state.show} 
          onHide={this.handleClose}>
          <div>
            <SelectedBeast 
                imageId={this.state.imageId} 
                beasts={this.state.data} 
                setShow={this.setShow}/>
          </div>
        </Modal>
      
      </div>


    )
  }
 
}


export default App;
