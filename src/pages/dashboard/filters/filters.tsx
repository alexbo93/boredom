import React from 'react';

import { ActivityFiltersModel } from 'pages/dashboard/types';
import { CustomInputWithIcon } from 'components/input';

import { FiltersContainer, FilterFavIcon } from './filters.styled';

const Filters: React.FC<ActivityFiltersModel> = ({
  filter,
  setFilter,
  displayFavs,
  toggleDisplayFavs,
}) => {
  const onFilterChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.target.value);
  };

  return (
    <FiltersContainer>
      <FilterFavIcon onClick={toggleDisplayFavs}>
        {displayFavs ? (
          <i className='fas fa-heart' />
        ) : (
          <i className='far fa-heart' />
        )}
      </FilterFavIcon>
      <CustomInputWithIcon
        placeholder='&#xf002; Some Input Text'
        name='filter'
        data-testid='filter-name'
        type='text'
        value={filter}
        onChange={onFilterChange}
      />
    </FiltersContainer>
  );
};

export default Filters;