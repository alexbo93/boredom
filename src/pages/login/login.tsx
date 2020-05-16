import React, { useState } from 'react';

import { CustomInput } from 'components/input';
import { MainButtonLink, MainButton } from 'components/button';

import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, login } from 'redux/auth';

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
    dispatch(login(nickname));
    history.push('/');
  };

  const isNickValid = () => {
    const regex = new RegExp('^[A-Za-z]{3,}$');
    return regex.test(nickname);
  };

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
            <h1>This is the login form</h1>
            <CustomInput
              name='nickname'
              type='text'
              onChange={handleNameChange}
              value={nickname}
              onBlur={handleInputVisited}
            />
            {!isNickValid() && visited ? (
              <InputErrorLabel>
                Name can only contain Alphabetic chars
              </InputErrorLabel>
            ) : (
              ''
            )}
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
