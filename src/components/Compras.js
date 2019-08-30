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
import TarjetasProcesos from './TarjetasProcesos';
import TarjetasLLamadas from './TarjetasLLamadas';
import TarjetaProcesoInspeccionados from './TarjetaProcesoInspeccionados';





class Compras extends Component {
    

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


                 </div>
                <div className="row">
                    <div className="col-md-10"> 
                 
                  <TarjetaProcesoInspeccionados/>
                       
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Compras;
