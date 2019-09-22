import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import {baseUrl} from '../constans/api_url';

const Api = baseUrl + "fincacompra/";

class PostCompra extends Component {
	constructor(props) {
		super(props)

		this.state = {
			idProceso: this.props.id,
			valorUnitario: '',
            cantidad: '',
            idProductoPresentacion:'',
            esPagoAlContado:'',
            observacion:''
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
			.post(Api, this.state)
			.then(response => {
				alert("Exito al Guardar los datos!!!")
			})
			.catch(error => {
				alert("ERROR AL GUARDAR LOS DATOS")
			})
	}

	




	render() {
		const {idProceso, valorUnitario,cantidad, idProductoPresentacion,esPagoAlContado,observacion} = this.state
		return (
			
                  <div className="container">
              
   
              <div>
                <br/>
                <h4>Registrar nueva compra</h4></div>
				<form onSubmit={this.submitHandler}>
					
                <TextField
							type="number"
							name="valorUnitario"
							value={valorUnitario}
                            onChange={this.changeHandler}
                            label="Precio Unitario"
                            margin="normal"
                            variant="outlined" 
						/>
				
						<TextField
							type="number"
							name="cantidad"
							value={cantidad}
                            onChange={this.changeHandler}                        
                            label="Cantidad"
                            margin="normal"
                            variant="outlined" 
						/>
					
                    <TextField
							type="number"
							name="idProductoPresentacion"
							value={idProductoPresentacion}
                            onChange={this.changeHandler}
                            label="Presentacion"
                            margin="normal"
                            variant="outlined" 
						/>
					
                    <TextField
							type="number"
							name="esPagoAlContado"
							value={esPagoAlContado}
                            onChange={this.changeHandler}
                            label="Pago al contado 0 No 1 Si"
                            margin="normal"
                            
						/>
                           <TextField
							type="text"
							name="observacion"
							value={observacion}
                            onChange={this.changeHandler}
                            label="Observaciones"
                            margin="normal"
                            variant="outlined" 
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

export default PostCompra