import styled from 'styled-components';

export const ListLabelsContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 20px;
  font-weight: bold;
`;

export const ItemLabel = styled.div`
  display: inline-block;
  width: 20%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ItemDescriptionLabel = styled(ItemLabel)`
  @media (max-width: 600px) {
    width: 80%;
  }
`;
