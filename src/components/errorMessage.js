import React from 'react';
import '../assets/scss/error.scss';

export default function ErrorMessage(props) {
  return <div className="error-message">{props.message}</div>;
}

ErrorMessage.defaultProps = {
  message: 'An error occured'
};
