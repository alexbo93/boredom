import React from 'react';

import Header from 'components/header';
import { MainContainer } from 'components/container';
import Pagination from 'react-js-pagination';

import ActivitiesList from './list';
import Filters from './filters';
import useActivities from './dashboard-hooks';

import { NotFoundLabel, PaginationContainer } from './dashboard.styled';

const Dashboard: React.FC<{}> = () => {
  const {
    ITEMS_PER_PAGE,
    activities,
    favourites,
    nickname,
    onFilterChange,
    filter,
    displayFavs,
    toggleDisplayFavs,
    getActivitiesWithFiltersAndOrder,
    onOrderSet,
    onToggleActivityLike,
    page,
    setPage,
    getIdsForCurrentPage,
  } = useActivities();

  const orderedAndFilteredIds = getActivitiesWithFiltersAndOrder(activities);
  const idsOfCurrentPage = getIdsForCurrentPage(orderedAndFilteredIds);
  const getIsActivitiesEmpty = () =>
    Object.keys(activities).length === 0 || orderedAndFilteredIds.length === 0;

  return (
    <>
      <Header contextMenu />
      <MainContainer>
        <h1>Welcome, {nickname}</h1>
        <Filters
          setFilter={onFilterChange}
          filter={filter}
          toggleDisplayFavs={toggleDisplayFavs}
          displayFavs={displayFavs}
        />
        {!getIsActivitiesEmpty() ? (
          <ActivitiesList
            idList={idsOfCurrentPage}
            activities={activities}
            favourites={favourites}
            onLabelSelected={onOrderSet}
            onToggleActivityLike={onToggleActivityLike}
          />
        ) : (
          <NotFoundLabel>No activities to show</NotFoundLabel>
        )}
      </MainContainer>
      <PaginationContainer>
        <Pagination
          activePage={page}
          itemsCountPerPage={ITEMS_PER_PAGE}
          totalItemsCount={orderedAndFilteredIds.length}
          pageRangeDisplayed={5}
          onChange={setPage}
        />
      </PaginationContainer>
    </>
  );
};

export default Dashboard;
