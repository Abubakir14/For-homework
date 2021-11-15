import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>                   {/*это Navigation он в себя включает nav ul лист которые передают пропс isLoggedIn чтобы вслучае прохождения регистрации выходить на экран в навбаре*/}
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>  {/* пропс onLogout чтобы при клике возвращать в Login страницу*/}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;