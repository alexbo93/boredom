import styled from 'styled-components';

export const FiltersContainer = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: 20px;

  i {
    margin-right: 10px;
    font-size: 24px;
    color: red;
    cursor: pointer;
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const FilterFavIcon = styled.span`
  vertical-align: middle;
`;
