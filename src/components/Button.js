import React from 'react';
import PropTypes from 'prop-types';

const { name } = this.props.name;
const Button = () => <div><h1>{name}</h1></div>;

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'claculator',
};

export default Button;
