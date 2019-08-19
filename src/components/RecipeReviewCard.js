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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LinkIcon from '@material-ui/icons/Launch'
import { Link } from 'react-router-dom';
import { relative } from 'path';
import firebase from '../Firebase';
import transformFinca from '../services/transformFinca';
import axios from 'axios';

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

class RecipeReviewCard extends React.Component {
  state = { expanded: false,

  }

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('empresas');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }
  

  onCollectionUpdate = (querySnapshot) => {
    console.log("Propiedades on collection");
    console.log(querySnapshot);

    /*const data = [];
    const instance = axios.get("https://localhost:44319/api/finca").then(response => {
  
    data.push(response.data);
    const {nombre} = response.data[1];
    console.log(nombre);
    });*/

    /*querySnapshot.forEach((doc) =>{
      const { idFinca, nombre, descripcion, departamento, municipio } = response.data();
      data.push({
        idFinca, nombre, descripcion, departamento, municipio
      });
    });
    console.log(data)*/




    const boards = [];

      querySnapshot.forEach((doc) => {
        const { nombre, descorta, deslarga, urlimagen, ciudad, avatar, votospositivos,votosneutrales,votosnegativos } = doc.data();
        boards.push({
          key: doc.id,
          doc, // DocumentSnapshot
          nombre,
          descorta,
          deslarga,
          urlimagen,
          ciudad,
          avatar,
          votospositivos,
          votosneutrales,
          votosnegativos,
        });




    });
    this.setState({
      boards
    });
    

    
  }


  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    this.handleUpdateClick();
  
  }

  handleUpdateClick = () =>{
    /*const api_finca = "https://localhost:44319/api/finca";
    fetch(api_finca).then(resolve => {    
        return resolve.json();
    }).then(data => {
         const newFinca = transformFinca(data);
         const { nombre } = newFinca;
        console.log(nombre);
        this.setState({
          data:newFinca
      });
        
    }); */

    /*const instance = axios.get("https://localhost:44319/api/finca").then(response => {
      const data = [];
      data.push(response.data);

      this.setState({
        data
      });
      
      

    });*/

      }



  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {


    const { classes } = this.props;
    var linktienda = "/about/one";
    
    return (

           

          <div className="row">

          {this.state.boards.map(board =>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                    {board.avatar}
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={<Link to={`/mostrarcatalogo/${board.key}`}>{board.nombre}</Link>}
                subheader={board.ciudad}
              />
              <CardMedia
                className={classes.media}
                image={board.urlimagen}
                title="Paella dish"
              />
              <CardContent>
                <Typography component="p">

                  {board.descorta}  
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                 <span className="badge badge-pill badge-success ml-2">{board.votospositivos}</span>
                 <span className="badge badge-pill badge-primary ml-2">{board.votosneutrales}</span>
                 <span className="badge badge-pill badge-danger ml-2">{board.votosnegativos}</span>
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
                  <Typography paragraph>Descripcion</Typography>
                  <Typography paragraph>

                    {board.deslarga}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>





          )}
        </div>

      

    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};




export default withStyles(styles)(RecipeReviewCard);