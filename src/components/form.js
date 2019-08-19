import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(){
      super();
      this.ref = firebase.firestore().collection('comentsFrontEnd');
      this.state = {
          name : "",
          email : "",
          message : "",
          formError: false,
          banderin:true,
          desabilitarBoton:false,
          contador:false,
      }
  }

  getName = (e) =>{
    let username = e.target.value; 
    this.setState({
        name: username
    });
    console.log(this.state.name);
  }
  
  
  getEmail = (e) =>{
    let userEmail = e.target.value; 
    //the most important thing is that we use a RegEx
    //in order to manage the input of the email
    //at least we can get a some what valid email
    if(userEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
      this.setState({
        email: userEmail
    });
      }else{
        this.setState({
          email: ""
      });
      console.log("Incorrect Email, must match Expression");
    }
  
    console.log(this.state.email);
  }

  
  getDescription = (e) =>{
    let userMessage = e.target.value; 
    this.setState({
        message: userMessage
    });
    console.log(this.state.message);
  }
  //send the form
  submitForm = (e) =>{
    e.preventDefault();
    const { name, email, message } = this.state;

    if(this.state.name === "" || this.state.email === "" || this.state.message === "" ){
     this.setState({
        formError: true,
        banderin:true
     })
       return false;
    }else{
        this.setState({
            formError: false,
            banderin:false,
          
         })
         
         if(!this.state.contador){
          const { name, email, message } = this.state;
          this.ref.add({
           name,
           email,
           message
         }).then((docRef) => {
           this.setState({
             name: '',
             email: '',
             message: '',
             contador: true,
           });
           this.props.history.push("/")
         })
         .catch((error) => {
           console.error("Error adding document: ", error);
         });
          console.log(`UserData: {
             Username: ${this.state.name},
             Email: ${this.state.email},
             Message: ${this.state.message}
         }`)
     
     
         console.log("form sent")
         }else{

         }

        return true;
    }
 
  }

  render() {

  

    return (
        <form>
          {/* I am just sending a basic error message */}
              {this.state.formError &&
                <p className="error">
                   Rellena todos los campos...
                </p>
              }
               {this.state.formError==false && this.state.banderin==false &&
                <p>
                 <h3 className="text-success"> El formulario ha sido enviado con exito!!! muy pronto nos pondremos en contacto.</h3>
                </p>
              }
                {this.state.contador &&
                <p className="error">
                  El formulario actual ya ha sido enviado. recarga la pagina si quieres agregar uno nuevo.
                </p>
              }
              
              <p>Rellena los siguientes campos para ponerte en contacto con nosotros</p>
              <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" placeholder="Escriba su nombre" onChange={this.getName} />
              </div>
              <div>
                <label htmlFor="email">Correo</label>
                <input type="email" name="email" placeholder="Utilizaremos este medio para comunicarnos" onChange={this.getEmail} />
              </div>
              <div>
                <label htmlFor="name">Mensaje</label>
                <textarea placeholder="Escriba su mensaje" onChange={this.getDescription} maxLength="450"></textarea>

              </div>
              <div>
                <p>Nos pondremos en contacto lo mas pronto posible</p>
                <input type="submit" name="submit" value="Enviar" onClick= {this.submitForm} />

              </div>
              
            </form>
    );
  }
}

export default Form;
