import React, { Component } from 'react';
import vinovino from './../images/vinovino.png';




class Main extends Component {
  render() {
    return (
      <main>
        
     
<div>
<div className="row"> 
<img src={vinovino}/>

  <div>
  <h1 style={{marginTop:'80px',fontFamily: 'Anton',fontStyle:'sans-serif'}}>Sistema de Gestion de Vinos</h1>
  <h3 style={{marginTop:'40px',fontFamily: 'Gentium Basic',fontStyle:'serif'}}>Es un sistema creado para la facil gestion del proceso de compra de un producto a una finca,</h3>
  <h3 style={{marginTop:'5px',fontFamily: 'Gentium Basic',fontStyle:'serif'}}>por medio de este el usuario podra realizar el registro de todo el proceso desde llamadas, </h3>
  <h3 style={{marginTop:'5px',fontFamily: 'Gentium Basic',fontStyle:'serif'}}>evaluacion, inspeccion y compra del producto cultivado en una finca.</h3>
  </div>
</div>
<h1 style={{textAlign:'center',marginTop:'80px', fontFamily: 'Great Vibes',fontSize:'30px'}}>___________________________________________________________________________</h1>
          
          <div className="services" style={{marginTop:'160px'}}>
            <div className="service-one">
              <p className="service-icon"><i className="fas fa-shopping-cart"></i></p>
              <p className="service-title">Uso Intuitivo</p>
              <p>Gestion de los procesos de compra a Fincas para vino de una forma Intuitiva para el usuario</p>

            </div>
            <div className="service-two">
              <p className="service-icon"><i className="fas fa-clipboard-check "></i></p>
              <p className="service-title">Confianza</p>
              <p>Un programa estable que utiliza las ultimas tecnologias asegurando la informacion del cliente</p>

            </div>
            <div className="service-three">
              <p className="service-icon"><i className="far fa-credit-card"></i></p>
              <p className="service-title">Diseno</p>
              <p>Un diseno actulizado a las ultimas tendencias para ofrecer una app elegante y funcional</p>



            </div>
          </div>

        </div>



      


      </main>
    );
  }
}

export default Main;
