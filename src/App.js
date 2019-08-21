import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";


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
      <div className="container">
        <Header />
        <Main />
        
      
        <Footer />
      </div>
    );
  }
}

export default App;
