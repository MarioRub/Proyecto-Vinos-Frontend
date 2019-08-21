import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

class Navigation extends Component {
    render() {
        return (

            <nav className="navbar navbar-dark bg-light ">
                <div className="row">
                    <div className="col-md-6">
                        <ul>
                            <a class="navbar-brand" href="#" />
                            <img src="http://developer.hondumall.net/static/files/logo.png" width="45" height="45" class="d-inline-block align-top" alt="" />
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li><Link to="/"><MenuItem>Inicio</MenuItem></Link></li>
                            <li><Link to="/Fincas"><MenuItem>Fincas</MenuItem></Link></li>
                            <li><Link to="/Procesos"><MenuItem>Procesos</MenuItem></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}
export default Navigation;