import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  margin-bottom: 50px;
  min-height: 95vh;
`;

export const ContentContainer = styled.div`
  width: 50%;
  margin: 10px auto 50px;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #ddd;
  padding: 30px;
  min-height: 500px;

  h1,
  h3 {
    margin-top: 0;
  }

  i {
    margin-right: 7px;
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
