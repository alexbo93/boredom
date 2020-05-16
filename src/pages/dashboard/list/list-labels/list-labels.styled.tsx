import styled from 'styled-components';

export const ListLabelsContainer = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px;
  font-weight: bold;

  grid-template-columns: 25px 30% repeat(4, 16%);

  div {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    grid-template-columns: 25px 80%;
  }
`;

export const ItemLabel = styled.div``;

export const ItemDescriptionLabel = styled.div``;
