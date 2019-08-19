import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import Nav from "./nav";
import Footer from "./footer";
import Navigation from "./Navigation";

class mostrarcatalogo extends Component {

  
   
  


  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };

  }
 
  componentDidMount() {
    const ref = firebase.firestore().collection('empresas').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
        console.log(this.state.board.comentsMap)
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('boards').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }



  cargar(id){

    var db = firebase.firestore();
    var studentsClassroomRef =
        db.collection('boards').doc('JfVBgBO54652744444MlQ2rmYZJgyrs')
          .collection('marcas');

          console.log(studentsClassroomRef)




  }



  render() {
    return (
      <div class="container">
   <Navigation/>
        <div className="row">
            <div className="col-md-4">
                <div style={{marginTop:20}}>
                <Link to={`/`} class="btn btn-outline-dark"><i class="fas fa-home">Inicio</i></Link>&nbsp; 
                <Link to={`/catalogo`} class="btn btn-outline-primary"><i class="fas fa-undo-alt">Regresar</i></Link>&nbsp;        
                 <a href={this.state.board.urltienda} target="black" class="btn btn-outline-success">   <i class="fas fa-external-link-square-alt">Visitar Tienda</i></a>
                </div>
           
            </div>
            <div className="col-md-8">
                <div style={{marginTop:80}}>

        <div class="panel panel-default">
          <div class="panel-heading">

            <h3 class="panel-title">
              <img src={this.state.board.urlimagen}/>
              {this.state.board.nombre}
            </h3>
            <div className="row">
            <h6 style={{marginLeft:20}}> <strong> <mark>Votos Positivos</mark></strong></h6>
            <span className="badge badge-pill badge-success ml-2">{this.state.board.votospositivos}</span>
            <h6 style={{marginLeft:20}}> <strong> <mark>Votos Neutrales</mark></strong></h6>
            <span className="badge badge-pill badge-primary ml-2">{this.state.board.votosneutrales}</span>
            <h6 style={{marginLeft:20}}> <strong> <mark>Votos Negativos</mark></strong></h6>
            <span className="badge badge-pill badge-danger ml-2">{this.state.board.votosnegativos}</span>
            
            </div>
          </div>
          <div class="panel-body">
          
            <dl>
              <dt>Breve Descripcion: </dt>
              <dd>{this.state.board.descorta}</dd>
              <dt>Direccion:</dt>
              <dd>{this.state.board.ciudad}</dd>
              <dt>Acciones:</dt>
              <dd> 
                  <a href={this.state.board.urltienda} target="black" class="btn btn-warning">Visitar Tienda</a>
                  <a href={this.state.board.urlubicacion} target="black" class="btn btn-success">Ubicacion Google Maps</a>
                  <a href={this.state.board.urlvoto} target="black" class="btn btn-outline-info">Votar</a>
                  <a href={this.state.board.urlcomentarios} target="black" class="btn btn-outline-success">comentarios</a>
              </dd>
              <dt>Descripcion completa:</dt>
              <dd>{this.state.board.deslarga}</dd>
            </dl>
          </div>
        </div>
        </div>
        </div>
        
        </div>
            <div>
                            
            <Footer />
            </div>
      </div>
    );
  }
}

export default mostrarcatalogo;
