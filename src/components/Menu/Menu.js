import React from 'react';
import {Drawer, List, ListItem, ListSubheader, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom'

const Menu = (props) => {
  console.log(props.showMenu)
  return (
    <Drawer open={props.showMenu} onClose={props.toggleShowMenu}>
      <div
      role="button"
      onClick={props.toggleShowMenu}
      onKeyDown={props.toggleShowMenu}>

          <Link to='/'><Typography variant='display2'>Taco Home</Typography></Link>
          <List>
            <ListSubheader>Explore</ListSubheader>
            <ListItem><Link to='/explore/baseLayers'>Base-Layers</Link></ListItem>
            <ListItem><Link to='/explore/mixins'>Mixins</Link></ListItem>
            <ListItem><Link to='/explore/condiments'>Condiments</Link></ListItem>
            <ListItem><Link to='/explore/seasonings'>Seasonings</Link></ListItem>
            <ListItem><Link to='/explore/shells'>Shells</Link></ListItem>
          </List>
          <Link to='/build_a_taco'><Typography variant='display2'>Build A Taco</Typography></Link>
      </div>
    </Drawer>
  )
}

export default Menu;