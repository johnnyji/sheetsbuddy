// Injects an entry point for GitRecruiter to sit on top of their page
import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@mui/material/CssBaseline';

import styles from './App.scss';

function App() {
  return (
    <CssBaseline>
      <div className={styles.main}>Hello!</div>
    </CssBaseline>
  );
}

const container = document.createElement('div');
container.id = 'git-recruiter';
document.querySelector('body').appendChild(container);

ReactDOM.render(<App />, container);
