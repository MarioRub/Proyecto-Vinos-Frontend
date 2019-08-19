import React, { Component } from 'react';
import Form from "./form";
import Nav from "./nav";
import Footer from "./footer";
import Navigation from "./Navigation";

class Main extends Component {
    render() {
        return (
            <main>
           <Navigation/>
     


            <div style={{marginTop:20}}>
                 <div className="services">
                    <div className="service-one">
                    <p className="service-icon"><i className="fas fa-plus"></i></p>
                    <p className="service-title">Servicios</p>
                 
                    <ul>
                        <li class="text-justify">Un subdominio, hosting y una base de datos <br/> única para cada negocio.</li>
                        <li class="text-justify">Creación de logotipos, personalización de los  <br/> colores de su página web, diseño de  <br/> productos y todo a diseño para su marca.</li>
                        <li class="text-justify">Tienda totalmente operativa con sus  <br/> productos y servicios listos para que el <br/> cliente haga su pedido.</li>
                    </ul>
                   
                    </div>
                    <div className="service-two">
                    <p className="service-icon"><i className="far fa-life-ring"></i></p>
                    <p className="service-title">Soporte</p>
                    <p>No te preocupes por la parte tecnica de la tienda, nosotros nos encargamos de todo.<br/>  **Tambien si lo deseas te creamos una tienda individual para que la puedas manejarla por tu propia cuenta</p>
                  
                    </div>
                    <div className="service-three">
                    <p className="service-icon"><i className="fas fa-handshake"></i></p>
                    <p className="service-title">Sin Pagos</p>
                    <p>Queremos formar un catalogo con tiendas confiables, por lo tanto estaras recibiendo nuestro servicio 
                        sin ningun costo. ***Aplican Restricciones***
                    </p>
                 
              </div>
            </div>
    
                </div>
    
            <section>
               
                <Form />
              
            </section>
    
           <Footer/>
          </main>

        );
    }
}

export default Main;
