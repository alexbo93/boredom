import React from 'react';

import Header from 'components/header';
import { MainContainer } from 'components/container';

import ActivitiesList from './list';
import Filters from './filters';
import useActivities from './dashboard-hooks';

import { NotFoundLabel } from './dashboard.styled';

const Dashboard: React.FC<{}> = () => {
  const {
    activities,
    nickname,
    setFilter,
    filter,
    displayFavs,
    toggleDisplayFavs,
    getActivitiesWithFiltersAndOrder,
    onOrderSet,
  } = useActivities();

  const orderedAndFilteredIds = getActivitiesWithFiltersAndOrder(activities);
  const getIsActivitiesEmpty = () =>
    Object.keys(activities).length === 0 || orderedAndFilteredIds.length === 0;

  return (
    <>
      <Header contextMenu />
      <MainContainer>
        <h1>Welcome, {nickname}</h1>
        <Filters
          setFilter={setFilter}
          filter={filter}
          toggleDisplayFavs={toggleDisplayFavs}
          displayFavs={displayFavs}
        />
        {!getIsActivitiesEmpty() ? (
          <ActivitiesList
            idList={orderedAndFilteredIds}
            activities={activities}
            onLabelSelected={onOrderSet}
          />
        ) : (
          <NotFoundLabel>No activities to show</NotFoundLabel>
        )}
      </MainContainer>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
