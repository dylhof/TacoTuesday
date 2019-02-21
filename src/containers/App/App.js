import React, { Component } from 'react';

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

  baseLayers () {

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
    console.log(baseLayers)
  }

  render() {
    return (
      <div className="App">
        <p>Hello</p>
        {this.baseLayers()}
      </div>
    );
  }
}

export default App;
