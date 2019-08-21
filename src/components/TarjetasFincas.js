import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress"
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
  
  componentDidMount() { 
    fetch('https://localhost:44319/api/finca')
          .then(res => res.json())
          .then(json => {
            console.log(json);
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
                         {item.idFinca}
                   </Avatar>}/>
                <CardContent>
                  <Typography component="p" color="inherit">
                    <h5>Municipio:</h5>
                    {item.municipio}  
                  </Typography>
               </CardContent>
               <CardContent>
                  <Typography component="p" color="inherit">
                  <h5>Departameto:</h5>
                    {item.departamento}  
                  </Typography>
               </CardContent>
                <CardContent>
                  <Typography component="p" color="inherit">
                  <h5>Descripcion:</h5>
                    {item.descripcion}  
                  </Typography>
               </CardContent>
               <CardContent>
                  <Typography component="p" color="inherit">
                  <h5>Estado Actual:</h5>
                    {item.estado}  
                  </Typography>
               </CardContent>
                <CardActions>
                  <Button className={classes.root} size="small" color="primary">
                      Ver Proceso Actual
                  </Button>
                </CardActions>
               </Card>
            ))}
        </div>
      );
    }
  }
}

export default withStyles(styles)(TarjetasFincas);