import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import 'typeface-roboto';   
import {Grid,Col,Row} from 'react-flexbox-grid';





class Navigation extends Component {


    
    

    render() {
        return (

            
                        
            <div> 
                
                
                    <div class="box"style={{backgroundColor:'white'}}>
                        
                            <h1 style={{textAlign:'center',marginTop:'3px', fontFamily: 'Great Vibes',fontSize:'72px'}}>Wine Production Management</h1>
                                                

                    <Row>
                    <div className="row" style={{backgroundColor:'white',textAlign:'center'}}>
                    
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
                       
                        </Row> 
                    </div>
                    
                

            </div>  

        )
    }

    

}


export default Navigation;