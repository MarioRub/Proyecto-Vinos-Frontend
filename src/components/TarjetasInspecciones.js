import React from 'react';
import PropTypes from 'prop-types';
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CallIcon from '@material-ui/icons/Call';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import LinkIcon from '@material-ui/icons/Launch'
import EditIcon from '@material-ui/icons/Edit';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from 'react-router-dom';


const Api = "https://localhost:44319/api/fincainspeccion/";



const DeleteApi =(idInspeccion) => {
  fetch(Api+idInspeccion, {
      method: 'DELETE'
		})
}



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

class TarjetasInspecciones extends React.Component {
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
    fetch('https://localhost:44319/api/fincainspeccion/'+this.props.id)
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
      return<div>Is Loading....</div>;
    }else{
    
    return (

 <div className="row">

            {this.state.items.map(item =>
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      {item.idInspeccion}
                    </Avatar>
                  }
                  action={
                    <IconButton>
                      <MoreVertIcon  />
                    </IconButton>
                  }
                  
                  subheader={"Inspecciones"}
                />
                <CardMedia
                  className={classes.media}
                  image={"http://www.cronicas.com.uy/wp-content/uploads/2018/08/cedu.jpg"}
                  title="LLamada"
                />
                <CardContent>
                  <Typography component="p">

                  <p> <strong> Fecha Visita:</strong> {item.fechaVisita} </p>
                  <p> <strong> Fecha Compra</strong> {item.fechaCompra}  </p>
                
                  </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>                
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
                    <Typography paragraph><strong>Observaciones</strong></Typography>
                    <Typography paragraph>
                   
                    <p> <strong> Observacion:</strong> {item.observacion}  </p>
                    </Typography>
                    <IconButton aria-label="Eliminar" onClick={()=>DeleteApi(item.idInspeccion)} >
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

export default withStyles(styles)(TarjetasInspecciones);