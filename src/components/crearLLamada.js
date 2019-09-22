import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./footer";
import Navigation from "./Navigation";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {baseUrl} from '../constans/api_url';


const Api = baseUrl+"finca/";

const reload = () => {
  window.location.reload(true);
}
const PostApi = ({nombre_finca,descripcion_finca,departamento_finca,municipio_finca,estado_finca}) => (

  fetch(Api, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  
      nombre: nombre_finca,
      descripcion: descripcion_finca,
      departamento: departamento_finca,
      municipio: municipio_finca,
      estado: estado_finca
    })
  }) 
)

function handlesend() {
  alert('You clicked the delete icon.');
}



class crearLLamada extends Component {
    
    render() {

        return (

            <div className="container">
              
   
                <div>
                  <br/>
                  <h4>Crear Nueva LLamada:</h4></div>
                
                  
               <TextField
                    id="outlinedn ombre"
                    label="Fecha"
                    
                    margin="normal"
                    variant="outlined" 
                    InputLabelProps={{
                      shrink: true,
                    }}
                 />
                <TextField
                    id="outlinedmunicipio"
                    label="Municipio"
                    defaultValue="" 
                    margin="normal"
                    variant="outlined"  
                    style={{ marginLeft: 10 }}
                 />
                 <TextField
                    id="outlineddepartamento"
                    label="Departamento"
                    defaultValue="" 
                    margin="normal"
                    variant="outlined"  
                    style={{ marginLeft: 10 }}
                 />
                <br/>
                <TextField
                    id="outlineddescripcion"
                    label="Descripcion"
                    defaultValue="" 
                    margin="normal"
                    variant="outlined"  
                     fullWidth
                 />
                 
                 <div style={{ marginTop: 20 }} >
                

                <Button variant="contained" color="primary"   style={{ marginTop: 1 }} onClick={handlesend} >
                 Guardar
                 
                </Button>

                <Link to="/Fincas">
                <Button variant="contained" color="secondary"    style={{ marginLeft: 10 }}>
                 Cancelar
                </Button>
                </Link>
                </div>
                
             


              
               


            </div>
        );
    }
}

export default crearLLamada;
