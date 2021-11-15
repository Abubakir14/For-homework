import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from '../Login/Login.module.css';
import Button from '../UI/Button/Button';


const emailReducer = (prevState, action) => {
  if(action.type === 'USER_INPUT') {    // если тип action равняется к USER_INPUT то мы получим значение от action и идёт проверка есть ли @ в данном инпуте
    return{
      value: action.value,
      isValid: action.value.includes('@')
    }
  }
  if(action.type === 'INPUT_WARNIN') {
    return {
      value: prevState.value,            // Здесь же мы получаем последнее состояние prevState у emailReducer и идет проверка есть ли у инпута собачка если есть то будет true
      isValid: prevState.value.includes('@'),
    }
  }
  return {
  value: '',
  isValid: false // если проверка покажет что у нас true то валидность тоже изменится на true и возврвщвется значение
  }
}
 


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState(''); 
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false); // это состояния пароля валидности пароля и валидность form для проверки инпута
  
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false  // здесь если emailReducer даст нам true IsValid будет true а так же мы получим value здесь мы используем useReducer чтобы enteredEmail и его валидность взаимодействовали и работали правильно проверяя последнее состояние enteredEmail
  })

  // useEffect(() => {
  //   const timer = setTimeout(()=> {
  //     console.log('effect work')
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 3000)

  //   return() => {
  //     console.log('clear up')
  //     clearTimeout(timer)
  //   }

  // }, [enteredEmail, enteredPassword])


  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT", value: event.target.value})
    // setEnteredEmail(event.target.value);   // констаната в dispatch даём тип и значение которое совпадает в emailReducer

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6 // проверка на "@" ии чтобы длина пароля не было меньше 6
    );
  };

  
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value); // берём значение

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.value.includes('@') // проверка занчение должно быть больше 6 и emailState должен иметь "@"
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmail({type: "INPUT_WARNING"}) // даём в dispatch значение INPUT_WARNING
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);  // проверка занчение должно быть больше 6
  };

  const submitHandler = (event) => {
    event.preventDefault(); // чтобы при нажатии не перезагружался браузер
    props.onLogin(emailState.value, enteredPassword); // передаём спомощью props emailState и enteredPassword
  };

  return (
    <Card className={classes.login}>      {/* здесь идёт рендеринг*/}
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.IsValid === false ? classes.invalid : ''   
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;