import React, { Fragment } from 'react'
import '../styles/App.css';
import Profile from './Profile';
import config from '../config';

function App() {
  return (
    <Fragment>
      <Profile 
        {...config.profile}
      />
    </Fragment>
  );
}

export default App;
