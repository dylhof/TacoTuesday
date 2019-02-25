import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const ErrorDisplay = (props) => {
  return(
    <div className='notFoundMessage'>
      <h2> 404 Taco not found</h2>
      <h3> The path name http://localhost:/3000{props.location.pathname} does not contain any tacos</h3>
      <Link to='/'>
      <Button>Return To Tacos</Button>
      </Link>
    </div>  
  )
};

export default withRouter(ErrorDisplay);

