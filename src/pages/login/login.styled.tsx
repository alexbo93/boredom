import styled from 'styled-components';

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

export const LoginFormContainer = styled.div`
  z-index: 1;
  width: 50%;
  position: relative;
  margin: 10px auto 50px;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #ddd;
  padding: 30px;
  min-height: 500px;

  -webkit-box-shadow: 0px 3px 5px 0px rgba(#999, 0.75);
  -moz-box-shadow: 0px 3px 5px 0px rgba(#999, 0.75);
  box-shadow: 0px 3px 5px 0px rgba(#999, 0.75);

  h1 {
    margin-top: 0;
  }

  @media (max-width: 768px) and (min-width: 601px) {
    width: 80%;
    padding: 15px;
  }

  @media (max-width: 600px) {
    width: 95%;
    padding: 15px;
  }
`;

export const InputErrorLabel = styled.span`
  color: red;
  font-size: 14px;
`;
