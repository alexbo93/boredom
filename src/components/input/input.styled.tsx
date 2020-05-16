import styled from 'styled-components';

export const CustomInput = styled.input`
  height: 35px;
  font-family: inherit;
  border: 1px solid #999;
  padding-left: 10px;

  i {
    margin-right: 10px;
    vertical-align: middle;
  }
`;

export const CustomInputWithIcon = styled(CustomInput)`
  font-family: FontAwesome, Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
`;
