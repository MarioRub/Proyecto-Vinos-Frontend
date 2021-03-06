import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./footer";
import TarjetasFincas from "./TarjetasFincas";
import Navigation from "./Navigation";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';



const reload = () => {
    window.location.reload(true);
  }
  





class Fincas extends Component {




    render() {
        
        
        return (
            
            
                <div >
                <Navigation/>
                 <div>
                     <br/>
                 <Link to="/crearNuevaFinca">
                     <Fab color="primary" aria-label="add"  className="buttonAdd">
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
