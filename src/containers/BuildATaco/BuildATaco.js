import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BuildATacoPart} from '../BuildATacoPart/BuildATacoPart'

export class BuildATaco extends Component{

  tacoChoices = () => {
    const {baseLayers, mixins, seasonings, condiments, shells } = this.props
    const tacoParts = [baseLayers, mixins, seasonings, condiments, shells]
    const tacoPartName = ['Base Layers:', 'Mixins:', 'Seasonings:', 'Condiments:', 'Shells:']
    const jsxTacoChoices = tacoParts.map((part, i) => <BuildATacoPart tacoPart={part} tacoPartName={tacoPartName[i]}/>)
    return jsxTacoChoices
  }

  render() {
    return(
      <div>
        {this.tacoChoices()}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  baseLayers: state.baseLayers,
  mixins: state.mixins,
  seasonings: state.seasonings,
  condiments: state.condiments,
  shells: state.shells
})

export default connect(mapStateToProps)(BuildATaco)