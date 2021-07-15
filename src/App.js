import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import SelectedBeast from './SelectedBeast';
import beastsArray from './data';
import 'bootstrap/dist/css/bootstrap.css';
import {Modal} from 'react-bootstrap';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: {beastsArray},
      show: false,
      imageId: 0
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

  handleClose = () => this.setShow(false);
  handleShow = () => this.setShow(true);

  



  render() {
    return (
      <div>
        <Header />
        <Main 
          beasts={beastsArray}
          isShowing={this.state.show}
          displayAsModal={this.selectImage}
          showModal={this.setShow}/>
        <Footer />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <div><SelectedBeast imageId={this.state.imageId} beasts={beastsArray} setShow={this.setShow}/></div>
        </Modal>
      
      </div>


    )
  }
 
}


export default App;
