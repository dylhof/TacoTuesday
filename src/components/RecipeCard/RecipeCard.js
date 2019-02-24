import React from 'react';
import { Card, List, ListItem, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import uuid from 'uuid/v4'

const styles = {
  card: {
    margin: '10px',
    padding: '10px',
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
};

export const RecipeCard = ({ tacoRecipe, classes }) => {
  const splitRecipe = tacoRecipe.recipe.split('\n');
  const jsxRecipeItems = splitRecipe.map(step => {
    if (!step.includes('=')) {
      return (
        <ListItem key={uuid()}>
          <ListItemText>
            {step}
          </ListItemText>
        </ListItem>)
    }
  });
  return (
    <Card className={classes.card}>
      <h3>{tacoRecipe.name}</h3>
      <List dense={true} className={classes.list}>
        {jsxRecipeItems}
      </List>
    </Card>
  );
};

export default withStyles(styles)(RecipeCard);