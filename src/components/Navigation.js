import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

class Navigation extends Component {
    render() {
        return (

            <nav className="navbar navbar-dark bg-light ">
                <div className="row">
                    <div className="col-md-4">
                        <ul>
                            <a class="navbar-brand"><Link to="/"></Link></a>
                            <img src="http://alimentosmadeinaragon.com/wp-content/uploads/2015/09/logo-vinos-covinca.png" width="45" height="45" class="d-inline-block align-top" alt="" />
                        </ul>
                    </div>
                    <div className="col-md-8">
                        <ul>
                            <li><Link to="/"><MenuItem>Inicio</MenuItem></Link></li>
                            <li><Link to="/Fincas"><MenuItem>Finca</MenuItem></Link></li>
                            <li><Link to="/Procesos"><MenuItem>Proceso</MenuItem></Link></li>
                            <li><Link to="/Compras"><MenuItem>Compra</MenuItem></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}
export default Navigation;