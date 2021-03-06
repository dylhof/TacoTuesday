import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import Title from '../Title/Title';

export class TacoPart extends Component {
  shiftTaco = (event) => {
    const shiftDirection = event.target.classList.contains('left') ? -1 : 1
    const currentPosition = event.target.parentElement.children[1].scrollLeft;
    event.target.parentElement.childNodes[1].scrollLeft = currentPosition +(600 * shiftDirection)
  }

  render () {
    const part = this.props.tacoPart;
    const tacoPartRecipes = this.props[part].map(recipe => {
      return (
        <Link to={`/${recipe.slug}`}>
          <RecipeCard 
          key={uuid()} 
          tacoRecipe={recipe} styleName='tacoPartRecipes'
          listStyleName='tacoPartList'/>
        </Link>
      )
    });

    return (
      <div>
        <Title/>
        <div className='carouselDisplay'>
        <i className="fas fa-chevron-left fa-2x left" onClick={this.shiftTaco}></i>
          <div className='carousel'>     
            {tacoPartRecipes}
          </div>
        <i className="fas fa-chevron-right fa-2x right" onClick={this.shiftTaco}></i>
        </div>
      </div>
    )
  };
}

export const mapStateToProps = state => ({
  baseLayers: state.baseLayers,
  mixins: state.mixins,
  condiments: state.condiments,
  seasonings: state.seasonings,
  shells: state.shells
})

export default connect(mapStateToProps)(TacoPart);

TacoPart.propTypes = {
  baseLayers: PropTypes.array,
  mixins: PropTypes.array,
  condiments: PropTypes.array,
  seasonings: PropTypes.array,
  shells: PropTypes.array,
  tacoPart: PropTypes.string
}