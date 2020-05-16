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

const Login = () => {
  const storeName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');

  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(evt.target.value);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(nickname));
  };

  const isNickValid = () => {
    const regex = new RegExp('^[A-Za-z]{3,}$');
    console.log('nickName: ', nickname);
    console.log('test: ', regex.test(nickname));
    return regex.test(nickname);
  };

  return (
    <LoginContainer>
      <OpacityContainer />
      <LoginFormContainer>
        {!!storeName ? (
          <>
            <h1>Your are already logged in</h1>
            <MainButtonLink to='/dashboard'>Go to Dashboard</MainButtonLink>
          </>
        ) : (
          <form onSubmit={handleLogin}>
            <h1>This is the login form</h1>
            <CustomInput
              name='nickname'
              type='text'
              onChange={handleNameChange}
              value={nickname}
            />
            {isNickValid() ? (
              ''
            ) : (
              <InputErrorLabel>
                Name can only contain Alphabetic chars
              </InputErrorLabel>
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
