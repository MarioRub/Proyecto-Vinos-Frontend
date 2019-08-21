import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from "./main";
import Footer from "./footer";
import TarjetasFincas from "./TarjetasFincas"
import Select from 'react-select';
import { Redirect } from 'react-router-dom';
import Navigation from "./Navigation";
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Header from "./header";
import crearNuevaFinca from './crearNuevaFinca';






class Fincas extends Component {
    
    
    
  
    
    
    constructor(props) {
        super(props);
       
    
    }

    

    onCollectionUpdate = () => {
       

    }

    componentDidMount() {
       

    }
    
    render() {
        


        return (
            <div className="container">
               <Navigation/>
                <div>
                    <br/>
                <Link to="/crearNuevaFinca">
                    <Fab color="primary" aria-label="add" style={{ marginTop: 50}} style={{ marginLeft: 1380}}>
                        <AddIcon/>
                    </Fab>
                    </Link>

                 </div>
                <div className="row">

                    <div className="col-md-10"> 
                 
                        <TarjetasFincas />
                      
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Fincas;
