import React from 'react';
import { connect } from 'react-redux';

const TacoPart = (props) => {
  const part = props.tacoPart
  console.log(props)
  const tacoPartRecipes = props[part].map(recipe => {
    return(

      <div>{recipe.name}</div>
    )
    
  })
  return(
    <div>{tacoPartRecipes}</div>
  )
}

export const mapStateToProps = state => ({
  baseLayers: state.baseLayers,
  mixins: state.mixins,
  condiments: state.condiments,
  seasonings: state.seasonings,
  shells: state.shells
})

export default connect(mapStateToProps)(TacoPart);
