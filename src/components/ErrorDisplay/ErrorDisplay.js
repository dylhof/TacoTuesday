import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {Typography, Button} from '@material-ui/core';

export const ErrorDisplay = (props) => {
  return(
    <div>
      <Typography variant='display3'> 404 Taco not found</Typography>
      <Typography variant='display2'> The path name http://localhost:/3000{props.location.pathname} does not contain any tacos</Typography>
      <Link to='/'>
      <Button>Return To Tacos</Button>
      </Link>
    </div>  
  )
}

export default withRouter(ErrorDisplay)

