import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Card, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import uuid from 'uuid/v4';
import {Link} from 'react-router-dom';
import { fetchRandoTaco } from '../../thunks/fetchRandoTaco';

const styles = {
  card: {
    margin: '10px',
    padding: '10px',
    height: '250px',
    opacity: '.8'
  },
  list: {
    height: '200px',
    overflow: 'scroll',
    border: '2px solid black',
    margin: '10px',
    padding: '3px',
    borderRadius: '5px'
  },

}

export class Home extends Component {
  mapRandoTaco = () => {
    const { randoTaco, classes } = this.props
    const randoTacoKeys = Object.keys(randoTaco)
    const jsxItems = randoTacoKeys.map(tacoLayer => {
      return (
        <Grid item key={randoTaco[tacoLayer].slug} xs={12} sm={6} md={4} lg={2}>
          <Link to={`/taco/${randoTaco[tacoLayer].slug}`}>
            <Card className={classes.card}>
              <h3>{randoTaco[tacoLayer].name}</h3>
              <List dense={true} className={classes.list}>{this.mapRecipe(randoTaco[tacoLayer].recipe)}</List>
            </Card>
          </Link>
        </Grid>)
    })
    return jsxItems
  }

  mapRecipe = (recipeText) => {
    const splitRecipe = recipeText.split('\n')
    const jsxRecipeItems = splitRecipe.map(step => {
      if (!step.includes('=')) {
        return (
          <ListItem key={uuid()}>
            <ListItemText>
              {step}
            </ListItemText>
          </ListItem>)
      }
    })
    return jsxRecipeItems
  }

  render() {
    return (
      <Grid container >
        {this.mapRandoTaco()}
        <Grid item xs={12} sm={6} md={4} lg={2} >
          <Card className={this.props.classes.card} onClick={this.props.fetchRandoTaco}> 
            <Typography>Click here To get a new Rando Taco!</Typography>
          </Card>
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