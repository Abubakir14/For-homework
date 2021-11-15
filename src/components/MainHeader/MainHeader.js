import React from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';


const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );                                          // здесь MainHeader хранит в себе Navigation и в общем то это как бы nav-bar с загаловкай A Typical Page
};      

export default MainHeader;