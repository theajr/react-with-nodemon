import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Button = ({ text }) => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      {text} - {count}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
