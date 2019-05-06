import React, { Component } from 'react';
import  Menu  from '../Menu/Menu';

export class Header extends Component {
  state = {
    showMenu: false
  }

  toggleShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    return (
      <header className='header'>
      {!this.state.showMenu && 
         <i className="fas fa-chevron-right fa-2x" onClick={this.toggleShowMenu}></i>}
        <h1>The Taste Of Taco Tuesday</h1>
        {this.state.showMenu && <Menu toggleShowMenu={this.toggleShowMenu} showMenu={this.state.showMenu}/>}
      </header>
    )
  }
}