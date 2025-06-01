import React from 'react'

const Button = ({text, classStyle, onClick}) => {
  return (
    <button className={classStyle} onClick={onClick}>{text}</button>
  );
};

export default Button