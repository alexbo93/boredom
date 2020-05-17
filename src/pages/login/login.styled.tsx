import styled from 'styled-components';
import { ContentContainer } from 'components/container';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const OpacityContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url('/assets/skulls.svg');
  background-repeat: repeat;
  opacity: 0.4;
  z-index: 0;
`;

export const LoginFormContainer = styled(ContentContainer)`
  z-index: 1;
  position: relative;
  top: 20%;
  margin: 0 auto;
  padding: 30px;
  min-height: 200px;
  background-color: white;
  text-align: center;

  -webkit-box-shadow: 0px 3px 5px 0px rgba(51, 51, 51, 0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(51, 51, 51, 0.75);
  box-shadow: 0px 3px 5px 0px rgba(51, 51, 51, 0.75);

  @media (max-width: 600px) {
    top: 10%;
  }

  h1 {
    margin-bottom: 30px;
  }

  input {
    display: block;
    margin: 0 auto;
  }
`;

export const InputErrorLabel = styled.span`
  color: red;
  font-size: 14px;
`;
