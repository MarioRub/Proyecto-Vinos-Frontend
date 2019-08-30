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
    this.setState({ selected: value });
  }  
  

  constructor(props){
    super(props);

    this.state = {
      isLoaded: false,
      items: [],
      selected: null,
    };

    

  };

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
  
  }

    
    render() {
      const { selected, hasError } = this.state;
      const { classes } = this.props;
      var  {isLoaded,items} = this.state;
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
            value={selected}
            onChange={event => this.handleChange(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            >
            {items.map(item=>(  
              <MenuItem key={item.nombre}value={item.nombre}>{item.nombre}</MenuItem>
              ))}
            </Select>
            
          </FormControl>
          </form>

                 
                 <div style={{ marginTop: 20 }} >
                
                 
                <Button variant="contained" color="primary"   style={{ marginTop: 1 }}  onClick={()=>console.log(selected)} >
                 Guardar
                </Button>
                
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
          





export default crearNuevaProceso;
