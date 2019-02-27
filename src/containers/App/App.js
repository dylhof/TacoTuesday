import React, { Component } from 'react';
import { Header } from '../../components/Header/Header';
import Home from '../Home/Home';
import { ErrorDisplay } from '../../components/ErrorDisplay/ErrorDisplay';
import { withRouter, Switch, Route } from 'react-router-dom';
import { fetchRandoTaco } from '../../thunks/fetchRandoTaco';
import { connect } from 'react-redux';
import { fetchAllTacoParts } from '../../thunks/fetchAllTacoParts';
import TacoPart from '../TacoPart/TacoPart';
import BuildATaco from '../BuildATaco/BuildATaco';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { Loading } from '../../components/Loading/Loading';
import PropTypes from 'prop-types';


export class App extends Component {
  componentDidMount = () => {
    this.props.fetchRandoTaco()
    this.props.fetchAllTacoParts()
  }

  findTacoPart = ({ match }) => {
    const tacoParts = ['baseLayers', 'mixins', 'condiments', 'seasonings', 'shells']
    const tacoPart = tacoParts.find(part => part === match.params.tacoPart)
    return (
      <TacoPart tacoPart={tacoPart} />
    )
  }

  findTacoPartRecipe = ({ match }) => {
    const { baseLayers, mixins, condiments, seasonings, shells } = this.props
    const allRecipes = [...baseLayers, ...mixins, ...condiments, ...seasonings, ...shells]
    const tacoPartRecipe = allRecipes.find(recipe => recipe.slug === match.params.tacoPartRecipe)
    return (
      <div onClick={() => this.props.history.goBack()}>
        <RecipeCard tacoRecipe={tacoPartRecipe} />
      </div>

    )
  }

  render() {
    const { isLoading, error } = this.props
    return (
      <div className="App">
        <Route path='/' component={Header} />
        {error && <h2>{error}</h2>}
        {isLoading ? <Loading /> :
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/explore/:tacoPart' render={this.findTacoPart} />
            <Route path='/build_a_taco' component={BuildATaco} />
            <Route path='/:tacoPartRecipe' render={this.findTacoPartRecipe} />
            <Route render={ErrorDisplay} />
          </Switch>
        }
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  fetchRandoTaco: () => dispatch(fetchRandoTaco()),
  fetchAllTacoParts: () => dispatch(fetchAllTacoParts())
})

export const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.isLoading,
  baseLayers: state.baseLayers,
  mixins: state.mixins,
  condiments: state.condiments,
  seasonings: state.seasonings,
  shells: state.shells
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  baseLayers: PropTypes.array,
  mixins: PropTypes.array,
  condiments: PropTypes.array,
  seasonings: PropTypes.array,
  shells: PropTypes.array,
  fetchRandoTaco: PropTypes.func,
  fetchAllTacoParts: PropTypes.func
}