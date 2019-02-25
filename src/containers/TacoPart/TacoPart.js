import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import uuid from 'uuid/v4';

export class TacoPart extends Component {
  shiftTaco = (event) => {
    debugger
    const shiftDirection = event.target.classList.contains('left') ? -1 : 1
    const currentPosition = event.target.parentElement.children[1].scrollLeft;
    event.target.parentElement.childNodes[1].scrollLeft = currentPosition +(600 * shiftDirection)
  }

  render () {
    const part = this.props.tacoPart;
    const tacoPartRecipes = this.props[part].map(recipe => {
      return (
        <RecipeCard 
        key={uuid()} 
        tacoRecipe={recipe} styleName='tacoPartRecipes'
        listStyleName='tacoPartList'/>
      )
    });

    return (
      <div className='carouselDisplay'>
      <i className="fas fa-chevron-left fa-2x left" onClick={this.shiftTaco}></i>
        <div className='carousel'>
          {tacoPartRecipes}
        </div>
        <i className="fas fa-chevron-right fa-2x right" onClick={this.shiftTaco}></i>
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
