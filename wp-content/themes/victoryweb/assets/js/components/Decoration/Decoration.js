import React from 'react';

const Decoration = ({
  w,
  h,
  color,
  top,
  right,
  bottom,
  left,
  zIndex,
  animationDuration,
}) => {
  const colors = {
    primary: '#c9727a',
    secondary: '#efcec8',
    light: '#faeeed',
    black: '#717171',
  };
  const styles = {
    top,
    right,
    bottom,
    left,
    width: w,
    height: h,
    borderColor: colors[color],
    zIndex,
    animationDuration,
  };

  return <span className="decoration" style={styles}></span>;
};

export default Decoration;
