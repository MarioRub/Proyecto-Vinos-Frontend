import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./footer";
import Navigation from "./Navigation";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";


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



class crearNuevaProceso extends Component {

  handleChange(value) {
    this.setState({ selectedfinca: value });
  }  
  
  handleChangeproducto(value) {
    this.setState({ selectedproducto: value });
  }  


  constructor(props){
    super(props);

    this.state = {
      isLoaded : false,
      items : [],
      selectedfinca : null,
      productos : [],
      selectedproducto : null,
      fechaInicio: '',
    };

    

  };

  changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
  }
  

  componentDidMount() { 
    fetch('https://localhost:44319/api/finca')
          .then(res => res.json())
          .then(json => {
            console.log(json);
            this.setState({
              isLoaded:true,
              items: json,
            })
          });

    fetch('https://localhost:44319/api/producto')
           .then(res => res.json())
          .then(json => {
            console.log(json);
            this.setState({
              productos: json,
            })
          });           

  
  }

    
    render() {
      const { selectedfinca, selectedproducto, hasError } = this.state;
      const { classes } = this.props;
      var  {isLoaded,items,productos,fechaInicio} = this.state;
      const estado="Creado";
      const proceso="Proceso";
      
      if(!isLoaded){
        return<div><CircularProgress size={50} /></div>
      }else{
          return (
        
            
            <div>
               <Navigation/>
                <div>
                  <br/>
                  <h2>Seleccione la Informacion:</h2></div>
           
           <form className={styles.root} autoComplete="off">


            <FormControl className={styles.formControl}>
            <InputLabel margin="dense">Selecciona la Finca</InputLabel>
            
            <Select 
            value={selectedfinca}
            onChange={event => this.handleChange(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            >
            {items.map(item=>(  
              <MenuItem key={item.idFinca}value={item.idFinca}>{item.nombre}</MenuItem>
              ))}
            </Select>
            
          </FormControl>
          </form>




          <form className={styles.root} autoComplete="off">

              <FormControl className={styles.formControl}>
              <InputLabel margin="dense">Selecciona el Producto</InputLabel>

              <Select 
              value={selectedproducto}
              onChange={event => this.handleChangeproducto(event.target.value)}
              InputLabelProps={{
              shrink: true,
              }}
              >
              {productos.map(item=>(  
              <MenuItem key={item.idProducto}value={item.idProducto}>{item.nombre}</MenuItem>
              ))}
              </Select>

              </FormControl>
          </form>     


          
         


          <TextField
							type="date"
							name="fechaInicio"
							value={fechaInicio}
              onChange={this.changeHandler}                        
              label="Fecha de Inicio"
              margin="normal"
							variant="outlined" 
							InputLabelProps={{
								shrink: true,
							  }}
						/>       

                 
                 <div style={{ marginTop: 20 }} >
                
                 <Link to="/Procesos">
                <Button variant="contained" color="primary"   style={{ marginTop: 1 }}  onClick={()=>PostApi(selectedfinca,selectedproducto,fechaInicio,estado,proceso)} >
                 Guardar
                </Button>
                </Link>
                <Link to="/Procesos">
                <Button variant="contained" color="secondary"    style={{ marginLeft: 10 }}>
                 Cancelar
                </Button>
                </Link>
                </div>
                
          
          
              

                
            
            <Footer/>
           </div>
        );
    }

    
 }

}
     
const PostApi = (selectedfinca,selectedproducto,fechaInicio,estado,proceso) => (
  
  fetch('https://localhost:44319/api/fincaproceso', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  
      nombre: proceso,
      fechaInicio: fechaInicio,
      estado: estado,
      idFinca: selectedfinca,
      idProducto: selectedproducto,
    })
  }) 
  
  
)





export default crearNuevaProceso;
