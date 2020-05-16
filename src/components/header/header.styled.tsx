import styled from 'styled-components';

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
    line-height: 60px;
  }
`;
