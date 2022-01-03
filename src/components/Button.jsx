import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <Link className='qhns-button' to={this.props.path}>
        {this.props.children}
      </Link>
    );
  }
}
