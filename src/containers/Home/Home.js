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
        <p>{randoTaco[tacoLayer].recipe}</p>
      </div>)
    })
    return jsxItems
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