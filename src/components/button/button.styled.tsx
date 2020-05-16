import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainButtonLink = styled(Link)`
  text-decoration: none;
  background-color: #ddd;
  border: 1px solid #999;
  border-radius: 20px;
  padding: 10px 30px;
  display: inline-block;
  margin-top: 20px;

  transition-duration: 0.3s;
  transition-property: color, background-color;

  &:hover {
    background-color: #bbb;
    color: #000;
  }
`;

export const MainButton = styled(MainButtonLink)`
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
`;
