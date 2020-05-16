import React from 'react';
import { useSelector } from 'react-redux';

import { selectActivities } from 'redux/activities';

import Header from 'components/header';
import { selectUserName } from 'redux/auth';
import { MainContainer } from 'components/container';

import ActivitiesList from './list';

const Dashboard: React.FC<{}> = () => {
  const activities = useSelector(selectActivities);
  const nickname = useSelector(selectUserName);

  console.log('ADD SEARCH AND FILTER');
  return (
    <>
      <Header contextMenu />
      <MainContainer>
        <h1>Welcome, {nickname}</h1>
        <ActivitiesList
          activities={activities}
          onLabelSelected={() => console.log('label selected')}
        />
      </MainContainer>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
