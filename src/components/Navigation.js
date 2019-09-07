import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import 'typeface-roboto';





class Navigation extends Component {


    
    

    render() {
        return (

            
                        
                   
            <div  style={{backgroundColor:'white'}}>
            <div style={{backgroundColor:'white'}}>
        <h2 style={{textAlign:'center',marginTop:'3px', fontFamily: 'Great Vibes',fontSize:'72px'}}>Wine Production Magnament</h2>
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