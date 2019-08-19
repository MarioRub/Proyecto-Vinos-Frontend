import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar-dark">
          <ul>
              <li className="logo">Hondu<span>Mall</span></li>
          </ul>
          <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/catalogo">Catalogo de Tiendas</Link></li>
          <li><Link to="/cuentavendedor">Cuenta de Vendedor</Link></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
