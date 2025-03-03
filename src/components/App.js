import React, { Fragment } from 'react'
import '../styles/App.css';
import { Profile, Skill, Career, Education } from '.';
import config from '../config';

function App() {
  return (
    <Fragment>
      <Profile 
        {...config.profile}
      />
      { config.skills && Array.isArray(config.skills) && <Skill skills={config.skills} /> }
      { config.careers && Array.isArray(config.careers) && <Career careers={config.careers} /> }
      { config.educations && Array.isArray(config.educations) && <Education educations={config.educations} /> }
    </Fragment>
  );
}

export default App;
