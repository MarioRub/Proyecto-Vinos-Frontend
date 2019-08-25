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

    const {idFinca} = this.props.location.state;
    const {nombre} = this.props.location.state;
    const {departamento}  = this.props.location.state;
    const {municipio} = this.props.location.state;
    const {descripcion} = this.props.location.state;

    this.state = {
      nombre:nombre,
      municipio:municipio,
      departamento:departamento,
      descripcion:descripcion,
      items:[],
      isLoaded: false,
      id:idFinca,
      
    };

  this.updateInputnombre = this.updateInputnombre.bind(this);
  this.updateInputmunicipio = this.updateInputmunicipio.bind(this);
  this.updateInputdepartamento = this.updateInputdepartamento.bind(this);
  this.updateInputdescripcion = this.updateInputdescripcion.bind(this);
  };


  componentWillMount() { 
    
    const {idFinca} = this.props.location.state;
    
    
    
    fetch(`${Api}${idFinca}`)
    .then(res => res.json())
    .then(json => {
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
     

      
      
      const {id}= this.state;
      
      
      

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
                    ref="nombre"
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
                    ref="municipio"
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
                    ref="departamento"
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
                    ref="descripcion"
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
                
                 <Link to="/Fincas">
                <Button variant="contained" color="primary"   style={{ marginTop: 1 }} onClick={()=>this.PostApi(nombre,descripcion,departamento,municipio)} >
                 Guardar
                </Button>
                 
                </Link>

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
       
          



      PostApi = (nombre,descripcion,departamento,municipio) => {
        const {id} = this.state;
        
  

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




  
  
  

}

export default editarFinca;
