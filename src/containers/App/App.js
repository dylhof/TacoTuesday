import React, { Component } from 'react';
import {Header} from '../../components/Header/Header';
import Home from '../Home/Home';
import { ErrorDisplay } from '../../components/ErrorDisplay/ErrorDisplay';
import { withRouter, Switch, Route } from 'react-router-dom';
import {fetchRandoTaco} from '../../thunks/fetchRandoTaco';
import { connect } from 'react-redux';
import {fetchAllTacoParts} from '../../thunks/fetchAllTacoParts';
import TacoPart from '../TacoPart/TacoPart';
// import('../../thunks/fetchAllTacoParts').then(fetchAllTacoParts => {fetchAllTacoParts.fetchAllTacoParts()})


export class App extends Component {
  componentDidMount = () => {
    this.props.fetchRandoTaco()
    this.props.fetchAllTacoParts()
  }

  findTacoPart = ({ match }) => {
    const tacoParts = ['baseLayers', 'mixins', 'condiments', 'seasonings', 'shells']
    const tacoPart = tacoParts.find(part => part === match.params.tacoPart)
    return(
      <TacoPart tacoPart={tacoPart}/>
    )
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Switch>
        <Route path='/' exact component={Home} />
          <Route path='/explore/:tacoPart' render={this.findTacoPart}/>
          <Route render={ErrorDisplay}/>
        </Switch>
        {this.props.error && <h2>{this.props.error}</h2>}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  fetchRandoTaco: () => dispatch(fetchRandoTaco()),
  fetchAllTacoParts: () => dispatch(fetchAllTacoParts())
})

export const mapStateToProps = state => ({
  error: state.error
})


export default withRouter(
  connect(mapStateToProps, 
    mapDispatchToProps
    )(App)
);
