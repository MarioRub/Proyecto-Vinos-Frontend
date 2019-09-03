import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from "./main";
import Footer from "./footer";
import TarjetasFincas from "./TarjetasFincas";
import Select from 'react-select';
import { Redirect } from 'react-router-dom';
import Navigation from "./Navigation";
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';



const reload = () => {
    window.location.reload(true);
  }
  





class Fincas extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            uses: null,   
        }
       

        this.setState({
            uses:this.props.location.state,
        })
    
    }
    

    
    render() {
        
        var {uses}= this.state;
        if(uses==='true'){
            this.reload();}
            else{
        return (
            
            
                <div >
                <Navigation/>
                 <div>
                     <br/>
                 <Link to="/crearNuevaFinca">
                     <Fab color="primary" aria-label="add" style={{ marginTop: 50}} style={{ marginLeft: 1800}}>
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
 
}

export default Fincas;
