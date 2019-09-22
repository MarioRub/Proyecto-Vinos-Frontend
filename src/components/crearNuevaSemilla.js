import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./footer";
import Navigation from "./Navigation";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import {baseUrl} from '../constans/api_url';



const Api = baseUrl+"semilla/";

const styles = { 
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    
    minWidth: 120,
    maxWidth: 300,
  },

  noLabel: {
    
  },
}

class crearNuevaSemilla extends Component {
  
  


  constructor(props){
    super(props);

    this.state = {
        nombre:null,
        descripcion:null,
    };




        this.updateInputnombre = this.updateInputnombre.bind(this);
        this.updateInputdescripcion = this.updateInputdescripcion.bind(this);
  };
  
    
    render() {
      
      const semillaNueva = {
          nombre:this.state.nombre,
          descripcion:this.state.descripcion,
          estado: "Creado",
      }
      
        return (
          

            <div>
               <div>{this.state.error}</div>
               <Navigation/>
                <div>
                  <br/>
                  <h2>Ingrese la Informacion de la Nueva Semilla:</h2></div>
                
           <form>
               <TextField
                    name="nombre"
                    label="Nombre"
                    margin="normal"
                    variant="outlined" 
                    onChange={this.updateInputnombre} 
                 />

                <br/>
                
                <TextField
                    name="descripcion"
                    label="Descripcion"
                    margin="normal"
                    variant="outlined"  
                    onChange={this.updateInputdescripcion}
                     fullWidth
                 />
                 
                 <div style={{ marginTop: 20 }} >
                    <Link  to="/" refresh="true">
                        <Button variant="contained" color="primary"   style={{ marginTop: 1 }} onClick={()=>PostApi(semillaNueva)} >
                        Guardar
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button variant="contained" color="secondary"    style={{ marginLeft: 10 }}>
                        Cancelar
                        </Button>
                    </Link>
                </div>
          </form>



                <Footer/>
            </div>
        );
    }



      updateInputnombre(event){
         this.setState({nombre : event.target.value})
      }

      updateInputdescripcion(event){
        this.setState({descripcion : event.target.value})
      }

          

}

const PostApi = (semillaNueva) => (

  

  axios
			.post(Api, semillaNueva)
			.then(response => {
				alert("Exito al Guardar los datos!!!")
				
			})
			.catch(error => {
				alert("ERROR AL GUARDAR LOS DATOS")
			})
  
  
)

export default crearNuevaSemilla;