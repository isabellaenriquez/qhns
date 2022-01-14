import React from 'react';
import './RecipeCard.css';

export default class RecipeCard extends React.Component {
  render() {
    return (
      <a className='recipe-card col' href={this.props.link}>
        <img
          className='recipe-card-img'
          src={require(`../assets/recipes/${this.props.imgPath}.png`)}
          alt={this.props.title}
        />
        <h3 className='recipe-title'>{this.props.title}</h3>
      </a>
    );
  }
}
