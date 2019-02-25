import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { IconButton } from '@material-ui/core';
import { ArrowForwardIos, ArrowBackIos } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import uuid from 'uuid/v4';

const styles = {
  
  carouselDisplay: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center'
  },
  carousel: {
    display: 'flex',
    width: '90%',
    overflow: 'scroll',
  }
}

export class TacoPart extends Component {
  shiftTaco = (event) => {
    const shiftDirection = event.target.classList.contains('left') ? -1 : 1
    const currentPosition = event.target.parentElement.children[1].scrollLeft;
    event.target.parentElement.childNodes[1].scrollLeft = currentPosition +(600 * shiftDirection)
  }

  render () {
    const {classes} = this.props;
    const part = this.props.tacoPart;
    const tacoPartRecipes = this.props[part].map(recipe => {
      return (
        <RecipeCard key={uuid()} tacoRecipe={recipe} />
      )
    });

    return (
      <div className={classes.carouselDisplay}>
      <i className="fas fa-chevron-left left" onClick={this.shiftTaco}></i>
        <div className={classes.carousel}>
          {tacoPartRecipes}
        </div>
        <i className="fas fa-chevron-right right" onClick={this.shiftTaco}></i>
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

export default withStyles(styles)(connect(mapStateToProps)(TacoPart));
