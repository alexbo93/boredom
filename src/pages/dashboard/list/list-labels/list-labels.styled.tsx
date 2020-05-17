import styled from 'styled-components';

export const ListLabelsContainer = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 10px;
  font-weight: bold;

  grid-template-columns: 25px 30% repeat(4, 16%);

  @media (max-width: 600px) {
    grid-template-columns: 25px 80%;
  }
`;

const Label = styled.div`
  cursor: pointer;
  i {
    margin-left: 5px;
  }
`;

export const ItemLabel = styled(Label)`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ItemDescriptionLabel = styled(Label)`
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const ListLabel = styled.span`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ListIcon = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
