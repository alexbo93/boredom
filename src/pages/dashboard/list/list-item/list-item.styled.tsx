import styled from 'styled-components';

export const ListItemContainer = styled.div`
  height: 50px;
  width: 100%;
  padding: 0 10px;
  border: 1px solid #999;
  background-color: #ddd;
  border-radius: 5px;
  margin-bottom: 10px;

  display: grid;
  grid-template-columns: 25px 30% repeat(4, 16%);

  @media (max-width: 600px) {
    grid-template-columns: 25px 80%;
  }
`;

export const ItemIconContainer = styled.div`
  i {
    line-height: 50px;
    color: red;
    cursor: pointer;
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

const ItemInfoContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    line-height: 50px;
  }
`;

export const ItemVariableInfoContainer = styled(ItemInfoContainer)`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ItemDescriptionContainer = styled(ItemInfoContainer)`
  @media (max-width: 600px) {
    width: 90%;
  }
`;
