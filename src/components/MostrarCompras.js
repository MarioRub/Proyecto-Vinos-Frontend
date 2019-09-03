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
import CrearLLamada from './crearLLamada';
import PostForm from './PostForm';
import TarjetasMostrarCompras from './TarjetasMostrarCompras';
import PostCompra from './PostCompra';







class MostrarCompras extends Component {
    

    onCollectionUpdate = () => {
       

    }

    componentDidMount() {
       

    }
    
    render() {
        


        return (
            <div>
               <Navigation/>
                
                <div className="row">
                
                    <div className="col-md-3"> 
                       
                    <PostCompra id={this.props.match.params.idProceso}/>          
                    </div>
                    <div className="col-md-9"> 
                       
                       <TarjetasMostrarCompras id={this.props.match.params.idProceso}/>                     
                  </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default MostrarCompras;
