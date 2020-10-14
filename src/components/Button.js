import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const widthC = {
    fifty: '50%',
    half: '25%',
  };
  let widthB;

  if (props.wide === true) { // eslint-disable-line
    widthB = widthC.fifty;
  } else {
    widthB = widthC.half;
  }
  return (
    // eslint-disable-next-line
    <button className="button-button" style={{ backgroundColor: props.color, width: widthB }} type="button">
      {props.name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  name: 'claculator',
  wide:"",
};

export default Button;
