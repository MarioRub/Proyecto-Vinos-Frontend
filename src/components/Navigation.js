import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import 'typeface-roboto';





class Navigation extends Component {


    
    

    render() {
        return (

            
                        
                   
            <div style={{backgroundColor:'white'}}>
            <div style={{backgroundColor:'white'}}>
        <h1 style={{textAlign:'center',marginTop:'3px', fontFamily: 'Great Vibes',fontSize:'72px'}}>Proyecto Vinos</h1>
        <h1 style={{textAlign:'center',marginTop:'0px', fontFamily: 'Great Vibes',fontSize:'30px'}}>___________________________</h1>
        </div> 
                    <div className="row" style={{backgroundColor:'white',marginLeft: '680px',textAlign:'center'}}>
                    
                        
                           
                            <Link to="/">
                                <MenuItem style={{textAlign:'center',color:"black",fontSize:'32px'}}> Inicio</MenuItem>
                            </Link>
                            
                            
                            <Link to="/Fincas">
                                <MenuItem style={{textAlign:'center',color:"black",fontSize:'32px'}} >Fincas</MenuItem>
                            </Link>
                            
                            <Link to="/Procesos">
                                <MenuItem style={{textAlign:'center',color:"black",fontSize:'32px'}} >Procesos</MenuItem>
                            </Link>
                            <Link to="/Compras">
                                <MenuItem style={{textAlign:'center',color:"black",fontSize:'32px'}} >Compras</MenuItem>
                            </Link>
                        
                        
                        
                        </div>
                        </div>

        )
    }

    

}


export default Navigation;