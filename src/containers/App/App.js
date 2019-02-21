import React, { Component } from 'react';
import {Header} from '../../components/Header/Header';
import {Home} from '../Home/Home';
import {ErrorDisplay} from '../../components/ErrorDisplay/ErrorDisplay'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor () {
    super()
    this.state = {
      randoTaco: {}
    }
  }

  componentDidMount () {
    this.fetchTacos()
  }

  randoTaco = () => {
    const randoTacoKeys = Object.keys(this.state.randoTaco)
    const jsxItems = randoTacoKeys.map(tacoLayer => {
    const {randoTaco} = this.state
      return(<div key={randoTaco[tacoLayer].slug}>
        <h3>{randoTaco[tacoLayer].name}</h3>
        <p>{randoTaco[tacoLayer].recipe}</p>
      </div>)
    })
    return jsxItems
  }

  fetchTacos = async () => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const targetURL = 'http://taco-randomizer.herokuapp.com/random'
    const response = await fetch(proxyURL + targetURL)
    const randoTaco = await response.json()
    console.log(randoTaco)
    this.setState({ randoTaco })
    
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
        {this.randoTaco()}
      </div>
    );
  }
}

export default App;
