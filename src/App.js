import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // состояние isLoggedIn если всё будет true то пользователь пройдёт регстр и якобы перейдёт в нами созданную страницу Home

  useEffect(() => {
  const storedUserLogged = localStorage.getItem('isLoggedIn') // юс ефект с локал стораж берём 'isLoggedIn'

    if(storedUserLogged === '1') { 
      setIsLoggedIn(true)                                     // если storedUserLogged будет равно к 1 то setIsLoggedIn будет true
    }
  }, [])

  


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);  // это константа чтобы в случае если !isLoggedIn true то мы loginHandler передаём к <Login/>
  };
  
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);   // это константа чтобы с помощью которой можно удалиться с локалсторадж 
  };

  
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> {/*в фрагменте мы рендерим MainHeader в нём стейт*/}
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />} {/*по умолчанию isLoggedIn у нас фолс и мы должны пройти регистрацию */}
        {isLoggedIn && <Home onLogout={logoutHandler} />} {/*по умолчанию isLoggedIn у нас true то к нам откроется Home logout компонента*/}
      </main>
    </React.Fragment>
  );
}

export default App;