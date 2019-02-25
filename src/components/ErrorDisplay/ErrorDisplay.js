import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const ErrorDisplay = (props) => {
  return(
    <div className='notFoundMessage'>
      <h2> 404 Taco not found</h2>
      <h3> The path name:</h3>
      <h3>http://localhost:/3000{props.location.pathname}</h3>
      <h3>does not contain any tacos</h3>
      <Link to='/'>
      <Button>Return To Tacos</Button>
      </Link>
    </div>  
  )
};

export default withRouter(ErrorDisplay);

