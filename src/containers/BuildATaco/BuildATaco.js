import React, {Component} from 'react';
import { connect } from 'react-redux';
import {BuildATacoPart} from '../../components/BuildATacoPart/BuildATacoPart';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import Title from '../Title/Title';

export class BuildATaco extends Component{

  tacoChoices = () => {
    const {baseLayers, mixins, seasonings, condiments, shells } = this.props
    const tacoParts = [baseLayers, mixins, seasonings, condiments, shells]
    const tacoPartName = ['Base Layer', 'Mixin', 'Seasoning', 'Condiment', 'Shell']
    const jsxTacoChoices = tacoParts.map((part, i) => <BuildATacoPart key={uuid()} tacoPart={part} tacoPartName={tacoPartName[i]}/>)
    return jsxTacoChoices
  }

  render() {
    return(
      <div className='buildATacoDiv'>
        <Title/>
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

BuildATaco.propTypes = {
  baseLayers: PropTypes.array,
  mixins: PropTypes.array,
  condiments: PropTypes.array,
  seasonings: PropTypes.array,
  shells: PropTypes.array
}