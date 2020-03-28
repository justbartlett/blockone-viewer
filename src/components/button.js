import React from 'react';
import Ripple from 'react-material-ripple';
import '../assets/scss/button.scss';

const Button = props => {
  return (
    <div className="button-container">
      <Ripple>
        <div>
          <button className="button" onClick={props.onClick}>
            Load
          </button>
          ;
        </div>
      </Ripple>
    </div>
  );
};

export default Button;
