import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nomatch = () => (
  <Header>
    404 page not found
    <Link to='/'>Home</Link>
  </Header>
)

export default Nomatch;