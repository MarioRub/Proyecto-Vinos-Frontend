import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import {baseUrl} from '../constans/api_url';

const Api = baseUrl + "fincaevaluacion/";

const reload = () => {
	window.location.reload(true);
  }

class PostEvaluacion extends Component {
	constructor(props) {
		super(props)

		this.state = {
			idProceso: this.props.id,
			observacion: '',
            fechaVisita: '',
            valoracionTerreno:'',
            fechaInspeccion:''
		}

		
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		
		axios
			.post(Api, this.state)
			.then(response => {
				alert("Exito al Guardar los datos!!!")
				reload();
			})
			.catch(error => {
				alert("ERROR AL GUARDAR LOS DATOS")
			})
	}

	




	render() {
		const {idProceso, observacion,fechaVisita, valoracionTerreno,fechaInspeccion} = this.state
		return (
			
                  <div className="container">
              
   
              <div>
                <br/>
                <h4>Crear Nueva Evaluacion:</h4></div>
				<form onSubmit={this.submitHandler}>
					
                <TextField
							type="text"
							name="observacion"
							value={observacion}
                            onChange={this.changeHandler}
                            label="Comentario"
                            margin="normal"
							variant="outlined"
							InputLabelProps={{
								shrink: true,
							  }} 
							
						/>
				
						<TextField
							type="date"
							name="fechaVisita"
							value={fechaVisita}
                            onChange={this.changeHandler}                        
                            label="Fecha Visita"
                            margin="normal"
							variant="outlined" 
							InputLabelProps={{
								shrink: true,
							  }}
						/>
					
                    <TextField
							type="text"
							name="valoracionTerreno"
							value={valoracionTerreno}
                            onChange={this.changeHandler}
                            label="Valoracion Terreno"
                            margin="normal"
							variant="outlined" 
							InputLabelProps={{
								shrink: true,
							  }}
						/>
					
                    <TextField
							type="date"
							name="fechaInspeccion"
							value={fechaInspeccion}
                            onChange={this.changeHandler}
                            label="Fecha Inspeccion"
							margin="normal"
							InputLabelProps={{
								shrink: true,
							  }}
                            
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

export default PostEvaluacion;