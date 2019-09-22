import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {baseUrl} from '../constans/api_url';

const Api = baseUrl + "fincacompra/";

const reload = () => {
  window.location.reload(true);
}

const DeleteApi =(idFinca) => {
  fetch(`${Api}${idFinca}`, {
			method: 'DELETE'
		});
reload();
}


const styles = theme => ({
  title: {
    color: 'white',

  },
  card: {
    maxWidth: 345,
    marginTop: '4%',
    marginLeft:'7%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});



class TarjetasMostrarCompras extends React.Component {
  state = { expanded: false,}

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }
  
  componentDidMount(){
    fetch(Api+this.props.id)
    .then(res=>res.json())
    .then(json=>{
      this.setState({
        isLoaded:true,
        items:json
      })
    });
  }
  

  render() {
    const { classes } = this.props;
    var  {isLoaded,items} = this.state;
    if(!isLoaded){
      return<div><CircularProgress size={50} /></div>
    }else{
      return(
        <div className="row">
            {items.map(item=>(                              
              <Card className={classes.card} key={item.id} >
                <CardHeader bordered style ={{backgroundColor: '#3f51b5'} }
                titleTypographyProps={{variant:'h5'}}
                title={item.nombre} 
                 avatar={
                    <Avatar aria-label="Finca" >
                         {item.id}
                   </Avatar>}/>
                <CardContent>
                  <Typography component="p" color="inherit">
                    <h7><strong>Precio Unitario L.:  </strong></h7>
                    {item.valorUnitario}  
                  </Typography>
               </CardContent>
               <CardContent>
                  <Typography component="p" color="inherit">
                  <h7><strong>Cantidad:</strong></h7>
                    {item.cantidad}  
                  </Typography>
               </CardContent>
               <CardContent>
                  <Typography component="p" color="inherit">
                  <h7><strong>Presentacion:</strong></h7>
                    {item.productoPresentacion.nombre}  
                  </Typography>
               </CardContent>
               <CardContent>
                  <Typography component="p" color="inherit">
                  <h7><strong>Esta Compra L.:  </strong></h7>
                    {item.cantidad*item.valorUnitario}  
                  </Typography>
               </CardContent>
                <CardContent>
                  <Typography component="p" color="inherit">
                  <h7><strong>Contado:</strong></h7>
                    {item.esPagoAlContado}  
                  </Typography>
               </CardContent>
               <CardContent>
                  <Typography component="p" color="inherit">
                  <h7><strong>Observaciones:</strong></h7>
                    {item.observacion}  
                  </Typography>
               </CardContent>
                <CardActions>
                <IconButton aria-label="Eliminar" onClick={()=>DeleteApi(item.idFinca)} >
                  <  DeleteForeverIcon />
                  </IconButton>
                </CardActions>
               </Card>
            ))}
        </div>
      );
    }
  }
}

export default withStyles(styles)(TarjetasMostrarCompras);