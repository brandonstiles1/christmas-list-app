import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '90%',
    margin: 'auto',
    marginBottom: '1.25rem',
    backgroundColor: '#efefef'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  deleteButton: {
    marginTop: '1rem'
  }
}));


const Gift = ({ gift, handleDelete }) => {
  const { name, link, price, description, image } = gift;

  const classes = useStyles();

  return (
    <Card key={ link } className={ classes.root }>
      <CardHeader title={ name } subheader={ price } />
      <CardContent>
        <CardMedia
          className={ classes.media }
          image={ image }
          title={ name }
        />
        <Typography variant='body2' color='textSecondary' component='p'>{ link }</Typography>
        <Typography variant='body2' color='textSecondary' component='p'>Additional Details:</Typography>
        <Typography variant='body2' color='textSecondary' component='p'>{ description }</Typography>
        <Button className={ classes.deleteButton } variant='contained' color='secondary' onClick={ () => handleDelete(link) }>Delete Gift</Button>
      </CardContent>
    </Card>
  )

}

export default Gift;