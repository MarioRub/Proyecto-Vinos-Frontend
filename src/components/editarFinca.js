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
      id:null,
      
    };

    

this.updateInputnombre = this.updateInputnombre.bind(this);
this.updateInputmunicipio = this.updateInputmunicipio.bind(this);
this.updateInputdepartamento = this.updateInputdepartamento.bind(this);
this.updateInputdescripcion = this.updateInputdescripcion.bind(this);
  };


  componentDidMount() { 
    
    const {idFinca} = this.props.location.state;
    this.setState({
      id:idFinca,
      nombre:this.state.items.nombre,
    })
    console.log("El Id de la Finca es:" + idFinca);
    fetch(`${Api}${idFinca}`)
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
      const {id}= this.state;
      console.log(id);
      
      

      var  {isLoaded,items} = this.state;
      
      

        return (
          
            
            <div className="container">
               <div>{this.state.error}</div>
               <Navigation/>
                <div>
                  <br/>
                  <h2>Ingrese Informacion a Editar de la Finca:</h2></div>
                
           <form >
             
               <input
                    name="nombre"
                    label="Nombre"
                    margin="normal"
                    variant="outlined" 
                    defaultValue={this.state.items.nombre}
                    onChange={this.updateInputnombre}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    
                    
                 />
                <input
                    name="municipio"
                    label="Municipio"
                    margin="normal"
                    variant="outlined"  
                    defaultValue={this.state.items.municipio}
                    onChange={this.updateInputmunicipio}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ marginLeft: 10 }}
                 />
                 <input
                    name="departamento"
                    label="Departamento"
                    margin="normal"
                    variant="outlined"  
                    defaultValue={this.state.items.departamento}
                    onChange={this.updateInputdepartamento}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ marginLeft: 10 }}
                 />
                <br/>
                <input
                    name="descripcion"
                    label="Descripcion"
                    margin="normal"
                    variant="outlined" 
                    defaultValue= {this.state.items.descripcion}
                    onChange={this.updateInputdescripcion}
                    InputLabelProps={{
                      shrink: true,
                    }}
                     fullWidth
                 />
                 
                 <div style={{ marginTop: 20 }} >
                

                <Button variant="contained" color="primary"   style={{ marginTop: 1 }} onClick={()=>PostApi(nombre,descripcion,departamento,municipio,id)} >
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

const PostApi = (nombre,descripcion,departamento,municipio,id) => {
  
  
  
  fetch(`${Api}${id}`, {
    method: 'PUT',
    headers: {
      
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  
      idFinca:id,
      nombre: nombre,
      descripcion: descripcion,
      departamento: departamento,
      municipio: municipio,
      estado: "Creado",
    })
  }) 
  

}

export default editarFinca;
