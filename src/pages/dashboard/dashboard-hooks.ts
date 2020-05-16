import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectActivities } from 'redux/activities';
import { selectFavourites } from 'redux/favourites';
import { selectUserName } from 'redux/auth';
import { Activities, Activity } from 'redux/activities/activities-types';

const useActivities = () => {
  const activities = useSelector(selectActivities);
  const favourites = useSelector(selectFavourites);
  const nickname = useSelector(selectUserName);

  const [filter, setFilter] = useState('');
  const [displayFavs, setDisplayFavs] = useState(false);

  const toggleDisplayFavs = () => setDisplayFavs((prevState) => !prevState);

  const [order, setOrder] = useState({
    param: 'activity',
    desc: true,
  });

  const getFilteredActivities = (activities: Activities): string[] => {
    let newList = Object.keys(activities);

    if (filter.length) {
      newList = newList.filter(
        (activityId: string) =>
          activities[activityId].activity
            .toLowerCase()
            .indexOf(filter.toLowerCase()) !== -1,
      );
    }
    if (displayFavs) {
      newList = newList.filter(
        (activityId: string) => !!favourites[activityId],
      );
    }

    return newList;
  };

  const orderList = (activitiesIds: string[], activities: Activities) => {
    let ordered = JSON.parse(JSON.stringify(activitiesIds));
    const orderParam = order.param as keyof Activity;
    const descOrderFn = (a: string, b: string) =>
      activities[a][orderParam] > activities[b][orderParam] ? -1 : 1;
    const ascOrderFn = (a: string, b: string) =>
      activities[a][orderParam] > activities[b][orderParam] ? 1 : -1;

    const sortFn = order.desc ? descOrderFn : ascOrderFn;

    return ordered.sort(sortFn);
  };

  const getActivitiesWithFiltersAndOrder = (activities: Activities) => {
    let filteredIds = getFilteredActivities(activities);
    filteredIds = orderList(filteredIds, activities);

    return filteredIds;
  };

  const onOrderSet = (name: string) =>
    setOrder({
      param: name,
      desc: name === order.param ? !order.desc : true,
    });

  return {
    activities,
    nickname,
    filter,
    setFilter,
    displayFavs,
    toggleDisplayFavs,
    getActivitiesWithFiltersAndOrder,
    onOrderSet,
  };
};

export default useActivities;
