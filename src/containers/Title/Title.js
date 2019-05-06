import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as title from '../../titles';

export class Title extends Component{
  constructor(props) {
    super(props)
  }

  findTitle = () => {
    switch (this.props.location.pathname) {
      case '/':
        return 'home'
      case '/explore/mixins':
          return 'mixins'
      default:
        return 'TACOS!'
    }
  }

  render(){
    const page = this.findTitle()
    return(
      <div>
          <h3>{title[page].title}</h3>
          <p>{title[page].description}</p>
      </div>
    )
  }
}

export default withRouter(Title);