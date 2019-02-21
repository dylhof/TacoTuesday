import React, { Component } from 'react';
import {Header} from '../../components/Header/Header';
import {Home} from '../Home/Home';
import {ErrorDisplay} from '../../components/ErrorDisplay/ErrorDisplay'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor () {
    super()
    this.state = {
      baseLayers: []
    }
  }

  componentDidMount () {
    this.fetchTacos()
  }

  baseLayers = () => {

    const jsxItems = this.state.baseLayers.map(baseLayer => {

      return(<div key={baseLayer.slug}>
        <h3>{baseLayer.name}</h3>
        <p>{baseLayer.recipe}</p>
      </div>)
    })
    return jsxItems
  }
  fetchTacos = async () => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const targetURL = 'http://taco-randomizer.herokuapp.com/base_layers'
    const response = await fetch(proxyURL + targetURL)
    const baseLayers = await response.json()
    this.setState({ baseLayers })
    
  }

  findTacoPart = () => {

  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/explore/:tacoPart' render={this.findTacoPart}/>
          <Route render={ErrorDisplay}/>
        </Switch>
        {this.baseLayers()}
      </div>
    );
  }
}

export default App;
