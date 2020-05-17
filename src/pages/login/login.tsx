import React, { useState } from 'react';

import { CustomInput } from 'components/input';
import { MainButtonLink, MainButton } from 'components/button';

import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, setUser } from 'redux/auth';

import {
  LoginContainer,
  LoginFormContainer,
  InputErrorLabel,
  OpacityContainer,
} from './login.styled';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const storeName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const history = useHistory();
  const [nickname, setNickname] = useState('');
  const [visited, setVisited] = useState(false);

  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(evt.target.value);
  };

  const handleInputVisited = () => {
    setVisited(true);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setUser(nickname));
    history.push('/');
  };

  const isNickValid = () => {
    const regex = new RegExp('^[A-Za-z]{3,}$');
    return regex.test(nickname);
  };

  console.log('END LOGIN STYLING AND REMOVE LOGIN ACTION');

  return (
    <LoginContainer>
      <OpacityContainer />
      <LoginFormContainer>
        {!!storeName ? (
          <>
            <h1>Your are already logged in</h1>
            <MainButtonLink to='/'>Go to Dashboard</MainButtonLink>
          </>
        ) : (
          <form onSubmit={handleLogin}>
            <h1>Hi, Bored person</h1>
            <div>
              <CustomInput
                name='nickname'
                type='text'
                onChange={handleNameChange}
                value={nickname}
                onBlur={handleInputVisited}
                placeholder="What's your name?"
              />
              {!isNickValid() && visited ? (
                <InputErrorLabel>
                  Name can only contain Alphabetic chars
                </InputErrorLabel>
              ) : (
                ''
              )}
            </div>
            <MainButton as='button' type='submit' disabled={!isNickValid()}>
              Let's go
            </MainButton>
          </form>
        )}
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Login;
