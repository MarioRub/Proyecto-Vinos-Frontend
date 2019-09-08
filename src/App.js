import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import {Grid,Col,Row} from 'react-flexbox-grid';
import vinoimagen from "./images/vinovino.png"


class App extends Component {
  constructor(props) {
    super();
    };
  

  onCollectionUpdate = (querySnapshot) => {

  }
 
  componentDidMount() {

  }
 
 
 
  render() {
    return (
      
      <div>
          <Header/>
          
          <img src={vinoimagen} />

        <Main />

        <Footer />
        </div>
      
      

    );
  }
}

export default App;
