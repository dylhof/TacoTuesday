import React, { Component } from 'react';
import {Header} from '../../components/Header/Header';
import Home from '../Home/Home';
import {ErrorDisplay} from '../../components/ErrorDisplay/ErrorDisplay'
import { withRouter, Switch, Route } from 'react-router-dom';
import {fetchRandoTaco} from '../../thunks/fetchRandoTaco';
import { connect } from 'react-redux';
import {fetchAllTacoParts} from '../../thunks/fetchAllTacoParts'
// import('../../thunks/fetchAllTacoParts').then(fetchAllTacoParts => {fetchAllTacoParts.fetchAllTacoParts()})


export class App extends Component {
  componentDidMount = () => {
    this.props.fetchRandoTaco()
    this.props.fetchAllTacoParts()
  }

  findTacoPart = () => {

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
        
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  fetchRandoTaco: () => dispatch(fetchRandoTaco()),
  fetchAllTacoParts: () => dispatch(fetchAllTacoParts())
})

export default withRouter(
  connect(null, 
    mapDispatchToProps
    )(App)
);
