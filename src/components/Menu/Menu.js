import React from 'react';
import {Drawer, List, ListItem} from '@material-ui/core';
import { Link } from 'react-router-dom'

const Menu = (props) => {
  console.log(props.showMenu)
  return (
    <Drawer open={props.showMenu} onClose={props.toggleShowMenu}>
      <div
      tabIndex={0}
      role="button"
      onClick={props.toggleShowMenu}
      onKeyDown={props.toggleShowMenu}>

        <h2>Explore</h2>
          <List>
            <ListItem><Link to='/explore/base-layers'>Base-Layers</Link></ListItem>
            <ListItem><Link to='/explore/mixins'>Mixins</Link></ListItem>
            <ListItem><Link to='/explore/condiments'>Condiments</Link></ListItem>
            <ListItem><Link to='/explore/seasonings'>Seasonings</Link></ListItem>
            <ListItem><Link to='/explore/shells'>Shells</Link></ListItem>
          </List>
      </div>
    </Drawer>
  )
}

export default Menu;