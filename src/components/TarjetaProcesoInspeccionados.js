import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import CircularProgress from "@material-ui/core/CircularProgress";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from 'react-router-dom';
import {baseUrl} from '../constans/api_url';



const Api = baseUrl+"fincacompra/";

const styles = theme => ({
  card: {
    maxWidth: 220,
    marginTop: '7%',
    marginLeft:'4%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class TarjetaProcesoInspeccionados extends React.Component {
  state = { expanded: false,

  }

  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
        items:[],
        isLoaded:false,
        contador:0,
    };
  }




  componentDidMount(){
    fetch(Api)
    .then(res=>res.json())
    .then(json=>{
      this.setState({
        isLoaded:true,
        items:json
      })
    });
  }



  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    var {isLoaded, items}=this.state;
    const { classes } = this.props;
    if(!isLoaded){
      return<div><CircularProgress size={80} /></div>;
    }else{
    
    return (

 <div className="row">

            {this.state.items.map(item =>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      {this.state.contador+1}
                    </Avatar>
                  }                  
                  subheader={item.nombre}
                />
                <CardMedia
                  className={classes.media}
                  image={"https://images.vexels.com/media/users/3/150252/raw/d5966833ace9d0da42dc27441817bb9c-ilustracion-de-dibujos-animados-de-finca-de-vinedo.jpg"}
                  title="Finca"
                />
                <CardContent>
                  <Typography component="p">

                  <strong> Inicio:</strong> {item.fechaInicio}  
                  <strong> Producto:</strong> {item.productos.nombre}  
                  </Typography>
                  <Typography component="p">
                <strong> Semilla:</strong> {item.productos.semilla.nombre} 
                </Typography>
                <Typography component="p">
                <strong> Estado:</strong> {item.estado}  
                </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton aria-label="Registrar LLamada">
                  <Link to={`/mostrarcompras/${item.idProceso}`} ><ShoppingCartIcon/></Link>&nbsp; 
                  </IconButton>               
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph><strong>Detalles de la finca</strong></Typography>
                    <Typography paragraph>
                    <ul >
                     <li>
                     <strong>Finca:</strong> {item.finca.nombre}
                     </li>
                     <li>
                     <strong>Departamento:</strong> {item.finca.departamento}

                     </li>
                     <li>
                     <strong>Municipio:</strong> {item.finca.municipio}
                     </li>
                     </ul>
                    </Typography>
                   
                  <IconButton aria-label="Eliminar" >
                  <  DeleteForeverIcon />
                  </IconButton>
                  </CardContent>
                </Collapse>
              </Card>

            )}
          </div>

    );
  }
}
}

export default withStyles(styles)(TarjetaProcesoInspeccionados);