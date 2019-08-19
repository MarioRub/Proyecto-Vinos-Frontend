import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";


class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards
   });
  }
 
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
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
