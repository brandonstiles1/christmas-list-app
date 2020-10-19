import React from 'react';
import Gift from './Gift';

import { makeStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support



const GiftList = ({ gifts, handleDelete }) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: '1rem',
      marginTop: '3rem'
    }
  }));

  const classes = useStyles();

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

  return (
    <div className={ classes.root }>
      {
        gifts.map((gift) => (
          <Fade in>
            <Gift handleDelete={ handleDelete } gift={ gift } />
          </Fade>
        ))
      }
    </div>
  );
}

export default GiftList;