import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as title from '../../titles';

export class Title extends Component{
  findTitle = () => {
    switch (this.props.location.pathname) {
      case '/':
        return 'home'
      case '/explore/mixins':
          return 'mixins'
      case '/explore/shells':
        return 'shells'
      case '/explore/baseLayers':
        return 'baselayers'
      case '/explore/condiments':
        return 'condiments'
      case '/explore/seasonings':
        return 'seasonings'
      case '/build_a_taco':
        return 'build_a_taco'
      default:
        return 'TACOS!'
    }
  }

  render(){
    const page = this.findTitle()
    return(
      <div className='Title--div'>
          <h3>{title[page].title}</h3>
          <p>{title[page].description}</p>
      </div>
    )
  }
}

export default withRouter(Title);