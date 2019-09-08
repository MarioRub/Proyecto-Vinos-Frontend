import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import axios from 'axios';




const Api = "https://localhost:44319/api/finca/";

const reload = () => {
  window.location.reload(true);
}

const DeleteApi =(idFinca) => {

  axios.delete(`${Api}${idFinca}`)
  .then(res => {
  alert("Borrada con Exito");
  console.log(idFinca);
   reload();  
  });
 
    
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



class TarjetasFincas extends React.Component {
  
  state = { expanded: false,}

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,  
      items: [],
    };


  }


componentWillMount(){
  fetch(Api)
  .then(res => res.json())
  .then(json => {
    console.log("Fetch Realizado")
    this.setState({
      isLoaded:true,
      items: json,
    })
  }); 
}


  

  render() {

    const { classes } = this.props;
    var  {isLoaded,items} = this.state;
    if(!isLoaded){
      return<div><CircularProgress size={80} /></div>
    }else{
      return(
        <div className="row">
            {items.map(item=>(                              
              <Card className={classes.card} key={item.id} >
                <CardHeader
                titleTypographyProps={{variant:'h5'}}
                title={item.nombre} 
                 avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar} >
                         {item.idFinca}
                   </Avatar>}/>
                   <CardMedia
                  className={classes.media}
                  image={"https://images.vexels.com/media/users/3/150252/raw/d5966833ace9d0da42dc27441817bb9c-ilustracion-de-dibujos-animados-de-finca-de-vinedo.jpg"}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography component="p">
                    <strong>Municipio:</strong> {item.municipio}  
                  </Typography>
                  <Typography component="p" color="inherit">
                  <strong>Departameto:</strong>
                    {item.departamento}  
                  </Typography>
                  <Typography component="p" color="inherit">
                  <strong>Descripcion:</strong>
                    {item.descripcion}  
                  </Typography>
                  <Typography component="p" color="inherit">
                  <strong>Estado Actual:</strong>
                    {item.estado}  
                  </Typography>
               </CardContent>
                <CardActions>
                <Link to={{pathname: "/editarFinca", state:{idFinca: item.idFinca,nombre:item.nombre,departamento:item.departamento,descripcion:item.descripcion,municipio:item.municipio}}}>
                <IconButton>
                    <EditIcon  iconClassName="material-icons" tooltip="Ligature"/>
                  </IconButton>
                  </Link>
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

export default withStyles(styles)(TarjetasFincas);