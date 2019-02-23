import React, {Component} from 'react';
import { connect } from 'react-redux';


export class Home extends Component{
  

  mapRandoTaco = () => {
    console.log('mapRandoTaco', this.props.randoTaco)
    const {randoTaco} = this.props
    const randoTacoKeys = Object.keys(randoTaco)
    const jsxItems = randoTacoKeys.map(tacoLayer => {
      return(<div key={randoTaco[tacoLayer].slug}>
        <h3>{randoTaco[tacoLayer].name}</h3>
        <div>{this.mapRecipe(randoTaco[tacoLayer].recipe)}</div>
      </div>)
    })
    return jsxItems
  }
  
  mapRecipe = (recipeText) => {
    const splitRecipe = recipeText.split('\n')
    const jsxRecipeItems = splitRecipe.map(step => {
      return(<p>{step}</p>)
    })
    return jsxRecipeItems
  }
  render() {
    return(
      <div>{this.mapRandoTaco()}</div>
    )
  }
}

export const mapStateToProps = state => ({
  randoTaco: state.randoTaco
})

export default connect(mapStateToProps)(Home)