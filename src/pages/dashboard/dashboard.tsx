import React from 'react';
import { useSelector } from 'react-redux';

import { selectActivities } from 'redux/activities';

import Header from 'components/header';
import { selectUserName } from 'redux/auth';
import { MainContainer } from 'components/container';

import ActivitiesList from './list';

const Dashboard: React.FC<{}> = () => {
  const activities = useSelector(selectActivities);
  console.log('activities: ', activities);
  const nickname = useSelector(selectUserName);

  console.log('ADD SEARCH AND FILTER');
  return (
    <>
      <Header contextMenu />
      <MainContainer>
        <h1>Welcome, {nickname}</h1>
        {!!Object.keys(activities).length ? (
          <ActivitiesList
            activities={activities}
            onLabelSelected={(name: string) => console.log(name)}
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
