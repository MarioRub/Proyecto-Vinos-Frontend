import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';





class Navigation extends Component {


    
    

    render() {
        return (

            
                
                    
                    
                   <div>
                    <Paper  >
                        <Tabs
                            indicatorColor="inherit"
                            textColor="inherit"
                            selected={true}
                            variant="fullWidth"
                            color= "default"
                        >
                        
                            <Link to="/">
                                <Tab label="Inicio" textColor="inherit" color= "primary" />
                            </Link>
                            
                            
                            <Link to="/Fincas">
                                <Tab label="Fincas"  />
                            </Link>

                            <Link to="/Procesos">
                                <Tab label="Procesos"  />
                            </Link>

                        </Tabs>
                        </Paper>
                       
                        
                        </div>
            
        )
    }

    

}


export default Navigation;