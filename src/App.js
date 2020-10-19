import React, { useState } from 'react';
import PropTypes from 'prop-types';

import GiftList from './components/GiftList';
import GiftEntryForm from './components/GiftEntryForm';
import BottomAppBar from './components/BottomAppBar';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support



const EMPTY_LIST_PROMPT = 'Enter a gift idea below to get started';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: 'red',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade (props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ ref } style={ style } { ...other }>
      {children }
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};


const App = () => {
  const [gifts, setGifts] = useState([
    // { name: 'Tesla', link: 'tesla.com', price: 42500, description: 'I want the Model 3 in black', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model3-lt-airporthero-low-101-1587061146.jpg?crop=1.00xw:1.00xh;0,0&resize=2048:*' },
    // { name: 'Macbook Pro', link: 'apple.com', price: 1300, description: 'I want the mid-level model here, w/ USB C', image: 'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-13..1588802180.jpg' }
  ]);
  const [open, setOpen] = useState(false);

  const classes = useStyles();


  const addGift = gift => {
    if (!gift.name) {
      window.alert('Please enter a gift name before submitting');
      return;
    }

    if (isNaN(gift.price)) {
      window.alert('The price field must contain only numbers');
      return;
    }

    const newGiftList = [gift, ...gifts];
    setGifts(newGiftList);
  };

  const deleteGift = link => {
    const listAfterDelete = gifts.filter((gift) => gift.link !== link);
    setGifts(listAfterDelete);
  };

  const openAddGiftModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <BottomAppBar openAddGiftModal={ openAddGiftModal } />
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={ classes.modal }
        open={ open }
        onClose={ closeModal }
        closeAfterTransition
        BackdropComponent={ Backdrop }
        BackdropProps={ {
          timeout: 500,
        } }
      >
        <Fade in={ open }>
          <div className={ classes.paper }>
            <GiftEntryForm handleSubmit={ addGift } onClose={ closeModal } />
          </div>
        </Fade>
      </Modal>
      { gifts.length ?
        <GiftList handleDelete={ deleteGift } gifts={ gifts } />
        :
        EMPTY_LIST_PROMPT }
    </div>
  );
}

export default App;
