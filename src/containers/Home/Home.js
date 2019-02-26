import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, } from '@material-ui/core'
import uuid from 'uuid/v4';
import {Link} from 'react-router-dom';
import { fetchRandoTaco } from '../../thunks/fetchRandoTaco';
import  RecipeCard  from '../../components/RecipeCard/RecipeCard';


export class Home extends Component {
  mapRandoTaco = () => {
    const { randoTaco } = this.props
    const randoTacoKeys = Object.keys(randoTaco)
    const jsxItems = randoTacoKeys.map(tacoLayer => {
      return (
        <Grid item key={uuid()} xs={12} sm={6} md={4} lg={3}>
          <Link to={`/${randoTaco[tacoLayer].slug}`}>
          <RecipeCard 
            styleName={'homeRecipes'}
            listStyleName={'homeList'}
            tacoRecipe={randoTaco[tacoLayer]}/>
          </Link>
        </Grid>)
    })
    return jsxItems
  }

  render() {
    const { fetchRandoTaco } = this.props
    return (
      <Grid container >
        {this.mapRandoTaco()}
        <Grid item xs={12} sm={6} md={4} lg={2} >
          <div className='recipeCard randoTacoRefresh' onClick={fetchRandoTaco}> 
          <h2>Click here To get a new Rando Taco!</h2>
          </div>
        </Grid>
      </Grid >
    )
  }
}

export const mapStateToProps = state => ({
  randoTaco: state.randoTaco
})

export const mapDispatchToProps = dispatch => ({
  fetchRandoTaco: () => dispatch(fetchRandoTaco())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)