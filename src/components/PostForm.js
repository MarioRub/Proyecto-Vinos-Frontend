import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			idProceso: this.props.id,
			fechaLLamada: '',
            observacion: '',
            fechaVisita:''
		}

		console.log(this.state.idProceso)
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('https://localhost:44319/api/fincallamada', this.state)
			.then(response => {
				alert("Exito al Guardar los datos!!!")
			})
			.catch(error => {
				alert("ERROR AL GUARDAR LOS DATOS")
			})
	}

	




	render() {
		const {idProceso, fechaLLamada, observacion,fechaVisita } = this.state
		return (
			
                  <div className="container">
              
   
              <div>
                <br/>
                <h4>Crear Nueva LLamada:</h4></div>
				<form onSubmit={this.submitHandler}>
					
					
				
						<TextField
							type="date"
							name="fechaLLamada"
							value={fechaLLamada}
                            onChange={this.changeHandler}                        
                            label="Nombre"
                            margin="normal"
                            variant="outlined" 
						/>
					
                    <TextField
							type="text"
							name="observacion"
							value={observacion}
                            onChange={this.changeHandler}
                            label="Comentario"
                            margin="normal"
                            variant="outlined" 
						/>
					
                    <TextField
							type="date"
							name="fechaVisita"
							value={fechaVisita}
                            onChange={this.changeHandler}
                            label="Fecha Visita"
                            margin="normal"
                            
						/>
				   <div style={{ marginTop: 20 }} ></div>
				
                    <Button variant="contained" color="primary"  type="submit"  style={{ marginTop: 1 }}  >
                 Guardar
                 
                </Button>
				<Link to="/Procesos">
                <Button variant="contained" color="secondary"    style={{ marginLeft: 10 }}>
                 Cancelar
                </Button>
                </Link>
				</form>
			</div>
		)
	}
}

export default PostForm