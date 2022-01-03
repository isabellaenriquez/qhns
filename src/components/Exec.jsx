import React from 'react';
import './Exec.css';

export default class Exec extends React.Component {
  render() {
    return (
      <div className='exec-card'>
        <img
          className='exec-img'
          src={this.props.img}
          alt={this.props.name}
        ></img>
        <p className='name'>{this.props.name}</p>
        <p className='title'>{this.props.title}</p>
        <p className='program'>{this.props.program}</p>
        <p className='snack'>{this.props.snack}</p>
      </div>
    );
  }
}
