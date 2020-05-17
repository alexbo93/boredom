import styled from 'styled-components';

import { HoverAnimation } from 'components/shared/shared.styled';

export const FiltersContainer = styled.div`
  width: 100%;
  text-align: right;
  margin-bottom: 20px;

  i {
    margin-right: 10px;
    font-size: 24px;
    color: red;
    cursor: pointer;
    ${HoverAnimation}
  }
`;

export const FilterFavIcon = styled.span`
  vertical-align: middle;
`;
