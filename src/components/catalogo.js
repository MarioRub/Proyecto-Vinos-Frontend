import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';
import Nav from "./nav";
import Main from "./main";
import Footer from "./footer";
import RecipeReviewCard from "./RecipeReviewCard"
import RecipeReviewCard1 from "./RecipeReviewCard1"
import Select from 'react-select';
import { Redirect } from 'react-router-dom';
import Navigation from "./Navigation";
import FincaReviewCards from './RecipeReviewCard1';


var options = [];
var valores=[];
var nombres=[];


class catalogo extends Component {
    state = {
        selectedOption: null,
      }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.props.history.push(selectedOption.value);
      }
    
    
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('empresas');
        this.unsubscribe = null;
        this.state = {
            boards: []
        };
    
    }

    actualizarDrop(){
        nombres=[];
        valores=[];
        options=[];
       this.state.boards.map(board=>
            nombres.push(board.nombre+'--'+board.ciudad),
        )
        this.state.boards.map(board=>
            valores.push('mostrarcatalogo/'+board.key),
        )

        for(var i=0;i<valores.length;i++){
          
               options.push({ value:valores[i], label: nombres[i] },)
    
            
        }
    }


    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
            const { nombre, descorta, deslarga,ciudad } = doc.data();
            boards.push({
                key: doc.id,
                doc, // DocumentSnapshot
                nombre,
                descorta,
                deslarga,
                ciudad,
            });
        });
        this.setState({
            boards
        });

        this.actualizarDrop()



    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
       

    }
    
    render() {
        const { selectedOption } = this.state;
       
       


        return (
            <div className="container">
               
               <Navigation/>
                {
                    this.actualizarDrop()
                }
              
                <div className="row">
                    <div  style={{ marginTop: 30}}>



                    </div>
                    <div className="col-md-10">
                 
                        <RecipeReviewCard1 />
                      
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default catalogo;
