import React, { Component } from 'react'
import { AppBar, IconButton } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import  Menu  from '../Menu/Menu'


export class Header extends Component {
  state = {
    showMenu: false
  }

  toggleShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    return (
      < AppBar position='sticky'>
      {!this.state.showMenu && 
      <IconButton onClick={this.toggleShowMenu} >
          <ArrowForwardIos />
        </IconButton>}
        
        <h1>TacoTuesday</h1>
        {this.state.showMenu && <Menu toggleShowMenu={this.toggleShowMenu} showMenu={this.state.showMenu}/>}
      </AppBar>
    )
  }
}