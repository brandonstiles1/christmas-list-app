import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';


const AddGiftForm = (props) => {
  const [gift, setGift] = useState({
    name: '',
    link: '',
    price: '',
    description: ''
  });

  const useStyles = makeStyles((theme) => ({
    form: {
      width: '90%',
      maxWidth: '500px',
      minHeight: '400px',
      margin: 'auto'
    },
    input: {
      marginBottom: '0.5rem',
      width: '100%',
    },
    modalHeader: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    submitButton: {
      marginTop: '1rem'
    }
  }));

  const classes = useStyles();

  const handleChange = e => {
    setGift({ ...gift, [e.target.name]: e.target.value })
  };

  const submitGift = (e) => {
    e.preventDefault();
    props.handleSubmit(gift);
    setGift({ name: '', link: '', price: '', description: '' });
    props.onClose();

  }


  return (
    <div>
      <Typography className={ classes.modalHeader } variant="h4" component="h4" gutterBottom>Add gift to your list</Typography>
      <form onSubmit={ submitGift } className={ classes.form }>
        <TextField className={ classes.input } name='name' value={ gift.name } onChange={ e => handleChange(e) } placeholder='Enter gift name here' />
        <TextField className={ classes.input } name='link' value={ gift.link } onChange={ e => handleChange(e) } placeholder='Enter gift link here' />
        <TextField className={ classes.input } name='price' value={ gift.price } onChange={ e => handleChange(e) } placeholder='Enter gift price here' />
        <TextField className={ classes.input } name='description' value={ gift.description } onChange={ e => handleChange(e) } placeholder='Additional details' />
        <Button className={ classes.submitButton } variant='contained' color='primary' onClick={ submitGift }>Add</Button>
      </form>
    </div>
  );
}

export default AddGiftForm;