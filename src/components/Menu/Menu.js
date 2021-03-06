import React from 'react';
import { Drawer } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Menu = (props) => {
  return (
    <Drawer 
    open={props.showMenu} 
    onClose={props.toggleShowMenu}
    className='drawer'>
      <div
        onClick={props.toggleShowMenu}
        onKeyDown={props.toggleShowMenu}
        className='menu'>
        <Link to='/'>
          <h3>
            I'll taco you Home
          </h3>
        </Link>
        <ul>
          <h3>Explore:</h3>
          <li>
            <Link to='/explore/baseLayers'>
              Base-Layers
            </Link>
          </li>
          <li>
            <Link to='/explore/mixins'>
              Mixins
            </Link>
          </li>
          <li>
            <Link to='/explore/condiments'>
              Condiments
            </Link>
          </li>
          <li>
            <Link to='/explore/seasonings'>
              Seasonings
            </Link>
          </li>
          <li>
            <Link to='/explore/shells'>
              Shells
            </Link>
          </li>
        </ul>
        <Link to='/build_a_taco'>
          <h3>
            Build A Taco
          </h3>
        </Link>
      </div>
    </Drawer>
  )
}

export default Menu;