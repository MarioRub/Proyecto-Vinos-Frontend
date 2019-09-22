import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./footer";
import Navigation from "./Navigation";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import TarjetasProcesos from './TarjetasProcesos';





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
                    <Fab color="primary" aria-label="add" className="buttonAdd">
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
