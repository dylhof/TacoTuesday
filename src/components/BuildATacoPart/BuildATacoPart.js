import React, {Component} from 'react';
import uuid from 'uuid/v4';
import { Link } from 'react-router-dom';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import PropTypes from 'prop-types';

export class BuildATacoPart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentRecipe: ''
    }
  }
  
  makeOptions = () => {
    const jsxTacoRecipeOptions = this.props.tacoPart.map(recipe => {
      const {name} = recipe
      return (
        <option value={name} key={uuid()} >{name}</option>
      )
    })
    return jsxTacoRecipeOptions
  }

  selectRecipe = (event) => {
    const currentRecipe = this.props.tacoPart.find(recipe => recipe.name === event.target.value)
    this.setState({ currentRecipe })
  }

  render () {
    const {currentRecipe} = this.state
    const { tacoPartName } = this.props
    return(
      <div className='buildATacoPartDiv'>
        <h2>{tacoPartName}:</h2>
        <select onChange={this.selectRecipe}>
          <option value=''>Select a Recipe</option>
          {this.makeOptions()}
        </select>
        {currentRecipe ? 
        <Link to={`/${currentRecipe.slug}`}>
          <RecipeCard 
            tacoRecipe={currentRecipe}
            styleName={'buildATacoRecipe'}
            listStyleName={'buildATacoList'} />
        </Link>
           : 
            <h3>Select a {tacoPartName}</h3>}
      </div>
    )
  }
}

BuildATacoPart.propTypes = {
  tacoPartName: PropTypes.string,
  tacoPart: PropTypes.array
}