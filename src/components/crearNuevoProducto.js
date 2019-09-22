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



const Api = baseUrl+"productos/";

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

class crearNuevoProducto extends Component {
  
  
  handleChangesemilla(value) {
    this.setState({ selectedproducto: value });
  }  

  constructor(props){
    super(props);

    this.state = {
        nombre:null,
        descripcion:null,
        semillas:[],
        selectedsemilla : null,
    };




        this.updateInputnombre = this.updateInputnombre.bind(this);
        this.updateInputdescripcion = this.updateInputdescripcion.bind(this);
  };
  
  componentDidMount(){ 
    fetch(Api+"/semilla")
    .then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState({
        semillas: json,
      })
    });
  }
    
    render() {
      
      const { semillas, selectedsemilla } = this.state;
      const productoNuevo = {
          nombre:this.state.nombre,
          descripcion:this.state.descripcion,
          estado: "Creado",
          idSemilla: this.state.semillas.idSemilla,
      }
      
        return (
          

            <div>
               <div>{this.state.error}</div>
               <Navigation/>
                <div>
                  <br/>
                  <h2>Ingrese Informacion del Nuevo Producto:</h2></div>
                
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

            <form className={styles.root} autoComplete="off">

              <FormControl className={styles.formControl}>
              
              
              <Select 
              value={selectedsemilla}
              onChange={event => this.handleChangesemilla(event.target.value)}
              InputLabelProps={{
              shrink: true,
              }}
              style={{width:'200px', marginTop:'20px',margin:'20px'}}
              >

              {semillas.map(item=>(  
              <MenuItem key={item.idSemilla}value={item.idSemilla}>{item.nombre}</MenuItem>
              ))}
              </Select>
              <FormHelperText style={{margin:'20px',marginTop:'1px'}}>Selecciona la Semilla</FormHelperText>
              </FormControl>
          </form>     
                 
                 <div style={{ marginTop: 20 }} >
                    <Link  to="/" refresh="true">
                        <Button variant="contained" color="primary"   style={{ marginTop: 1 }} onClick={()=>PostApi(productoNuevo)} >
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

const PostApi = (productoNuevo) => (

  

  axios
			.post(Api, productoNuevo)
			.then(response => {
				alert("Exito al Guardar los datos!!!")
				
			})
			.catch(error => {
				alert("ERROR AL GUARDAR LOS DATOS")
			})
  
  
)

export default crearNuevoProducto;