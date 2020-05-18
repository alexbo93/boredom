import styled from 'styled-components';

export const NotFoundLabel = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;

export const PaginationContainer = styled.div`
  margin-bottom: 30px;
  text-align: center;
  .pagination {
    list-style: none;
    height: 20px;
    padding-left: 0;

    li {
      border: 1px solid #999;
      padding: 5px 10px;
      display: inline-block;
      border-right: none;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #333;
      }

      &:hover,
      &.active {
        background-color: #ddd;
      }

      &.disabled,
      &.disabled a {
        cursor: not-allowed;
      }

      &:first-child {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }

      &:last-child {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        border-right: 1px solid #999;
      }
    }
  }
`;
