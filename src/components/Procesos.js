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





class Procesos extends Component {
    

    onCollectionUpdate = () => {
       

    }

    componentDidMount() {
       

    }
    
    render() {
        


        return (
            <div >
               <Navigation/>
                <div>
                    <br/>
                    <Link to="/crearNuevaProceso">
                    <Fab color="primary" aria-label="add" style={{ marginTop: 50}} style={{ marginLeft: 1800}}>
                        <AddIcon/>
                    </Fab>
                    </Link>

                 </div>
                <div className="row">
                    <div className="col-md-10"> 
                 
                  <TarjetasProcesos/>
                       
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Procesos;
