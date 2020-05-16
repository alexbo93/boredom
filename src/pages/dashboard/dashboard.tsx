import React from 'react';

import Header from 'components/header';
import { MainContainer } from 'components/container';

import ActivitiesList from './list';
import useActivities from './dashboard-hooks';

const Dashboard: React.FC<{}> = () => {
  const {
    activities,
    nickname,
    setFilter,
    setDisplayFavs,
    getActivitiesWithFiltersAndOrder,
    onOrderSet,
  } = useActivities();

  return (
    <>
      <Header contextMenu />
      <MainContainer>
        <h1>Welcome, {nickname}</h1>
        {/* <ActivityFilters /> */}
        {!!Object.keys(activities).length ? (
          <ActivitiesList
            idList={getActivitiesWithFiltersAndOrder(activities)}
            activities={activities}
            onLabelSelected={onOrderSet}
          />
        ) : (
          'No activities to show'
        )}
      </MainContainer>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
