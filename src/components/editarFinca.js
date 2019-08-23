import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./footer";
import Navigation from "./Navigation";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const Api = "https://localhost:44319/api/finca/";





class editarFinca extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      nombre:null,
      municipio:null,
      departamento:null,
      descripcion:null,
      items:[],
      isLoaded: false,
      
    };
this.updateInputnombre = this.updateInputnombre.bind(this);
this.updateInputmunicipio = this.updateInputmunicipio.bind(this);
this.updateInputdepartamento = this.updateInputdepartamento.bind(this);
this.updateInputdescripcion = this.updateInputdescripcion.bind(this);
  };


  componentDidMount() { 
    
      fetch('https://localhost:44319/api/finca/9')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded:true,
          items: json,
        })
      });
    
  
  }


    
    render() {
      const {nombre}= this.state;
      const {municipio}= this.state;
      const {departamento}= this.state;
      const {descripcion}= this.state;
      const estado ="Creado";

      var  {isLoaded,items} = this.state;
      
      

        return (
          
            
            <div className="container">
               <div>{this.state.error}</div>
               <Navigation/>
                <div>
                  <br/>
                  <h2>Ingrese Informacion de la Finca:</h2></div>
                
           <form >
               <TextField
                    name="nombre"
                    label="Nombre"
                    margin="normal"
                    variant="outlined" 
                    value={items.nombre}
                    onChange={this.updateInputnombre}
                    InputLabelProps={{
                      shrink: true,
                      readOnly: false,
                    }}
                    
                    
                 />
                <TextField
                    name="municipio"
                    label="Municipio"
                    margin="normal"
                    variant="outlined"  
                    defaultValue=""
                    onChange={this.updateInputmunicipio}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ marginLeft: 10 }}
                 />
                 <TextField
                    name="departamento"
                    label="Departamento"
                    margin="normal"
                    variant="outlined"  
                    value={items.departamento}
                    onChange={this.updateInputdepartamento}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ marginLeft: 10 }}
                 />
                <br/>
                <TextField
                    name="descripcion"
                    label="Descripcion"
                    margin="normal"
                    variant="outlined" 
                    defaultValue= {items.descripcion}
                    onChange={this.updateInputdescripcion}
                    InputLabelProps={{
                      shrink: true,
                    }}
                     fullWidth
                 />
                 
                 <div style={{ marginTop: 20 }} >
                

                <Button variant="contained" color="primary"   style={{ marginTop: 1 }} onClick={()=>PostApi(nombre,descripcion,departamento,municipio)} >
                 Guardar
                </Button>

                <Link to="/Fincas">
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

    updateInputmunicipio(event){
      this.setState({municipio : event.target.value})
      
      }

      updateInputdepartamento(event){
        this.setState({departamento : event.target.value})
        
        }

        updateInputdescripcion(event){
          this.setState({descripcion : event.target.value})
         
          }
          

}

const PostApi = (nombre,descripcion,departamento,municipio) => (

  fetch('https://localhost:44319/api/finca', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  
      nombre: nombre,
      descripcion: descripcion,
      departamento: departamento,
      municipio: municipio,
      estado: "Creado",
    })
  }) 
)

export default editarFinca;
