import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Card, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import uuid from 'uuid/v4';
import {Link} from 'react-router-dom';
import { fetchRandoTaco } from '../../thunks/fetchRandoTaco';
import  RecipeCard  from '../../components/RecipeCard/RecipeCard';

const styles = {
  card: {
    height: '250px',
  },
  subCard: {
    margin: '10px',
    padding: '10px',
    opacity: '.8',
    height: '260px'
  }
}

export class Home extends Component {
  mapRandoTaco = () => {
    const { randoTaco, classes } = this.props
    const randoTacoKeys = Object.keys(randoTaco)
    const jsxItems = randoTacoKeys.map(tacoLayer => {
      return (
        <Grid item key={randoTaco[tacoLayer].slug} xs={12} sm={6} md={4} lg={3}>
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
    const {classes, fetchRandoTaco} = this.props
    return (
      <Grid container >
        {this.mapRandoTaco()}
        <Grid item xs={12} sm={6} md={4} lg={2} >
          <div className='recipeCard' onClick={fetchRandoTaco}> 
          <h3>Click here To get a new Rando Taco!</h3>
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home))