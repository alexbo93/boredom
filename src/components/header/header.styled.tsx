import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #373737;
  padding-left: 30px;
  -webkit-box-shadow: 0px 5px 20px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 20px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 20px -6px rgba(0, 0, 0, 0.75);
  display: inline-block;
`;

export const HeaderLogoContainer = styled.div`
  float: left;

  span,
  img {
    vertical-align: middle;
    line-height: 60px;
  }

  img {
    margin-right: 15px;
  }
`;

export const HeaderNavContainer = styled.div`
  float: right;
  height: 100%;
  width: 60px;
  border-left: 1px solid #999;
  cursor: pointer;
  text-align: center;

  i {
    color: #999;
    font-size: 24px;
    line-height: 60px;
  }
`;

export const Dropdown = styled.div`
  position: fixed;
  top: 55px;
  right: 25px;
  z-index: 3;
  background-color: white;
  border-radius: 5px;
  padding: 25px 20px;
  width: 200px;

  -webkit-box-shadow: 0px 5px 10px 0px rgba(51, 51, 51, 1);
  -moz-box-shadow: 0px 5px 10px 0px rgba(51, 51, 51, 1);
  box-shadow: 0px 5px 10px 0px rgba(51, 51, 51, 1);

  animation: 0.3s ${fadeIn} ease-out;
`;

export const DropdownList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;

  li {
    margin-bottom: 20px;
    cursor: pointer;
    color: #555;

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
`;
