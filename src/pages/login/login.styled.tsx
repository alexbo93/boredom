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
  opacity: 0.6;
  z-index: 0;
`;

export const LoginFormContainer = styled(ContentContainer)`
  z-index: 1;
  position: relative;
  top: 20%;
  margin: 0 auto;
  padding: 30px;
  min-height: 200px;

  -webkit-box-shadow: 0px 3px 5px 0px rgba(#999, 0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(#999, 0.75);
  box-shadow: 0px 3px 5px 0px rgba(#999, 0.75);

  @media (max-width: 600px) {
    top: 10%;
  }
`;

export const InputErrorLabel = styled.span`
  color: red;
  font-size: 14px;
`;
