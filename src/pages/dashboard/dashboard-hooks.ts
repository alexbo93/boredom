import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectActivities } from 'redux/activities';
import {
  selectFavourites,
  addFavourite,
  removeFavourite,
} from 'redux/favourites';
import { selectUserName } from 'redux/auth';
import { Activities, Activity } from 'redux/activities/activities-types';

const useActivities = () => {
  const ITEMS_PER_PAGE = 10;
  const activities = useSelector(selectActivities);
  const favourites = useSelector(selectFavourites);
  const nickname = useSelector(selectUserName);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');
  const [displayFavs, setDisplayFavs] = useState(false);
  const [page, setPage] = useState(1);
  const resetPaginator = () => setPage(1);

  const toggleDisplayFavs = () => setDisplayFavs((prevState) => !prevState);

  const [order, setOrder] = useState({
    param: 'activity',
    desc: true,
  });

  const getFilteredActivities = useCallback(
    (activities: Activities): string[] => {
      let newList = Object.keys(activities);

      if (filter.length) {
        newList = newList.filter(
          (activityId: string) =>
            activities[activityId].activity
              .toLowerCase()
              .indexOf(filter.toLowerCase()) !== -1,
        );
        // resetPaginator();
      }
      if (displayFavs) {
        newList = newList.filter(
          (activityId: string) => !!favourites[activityId],
        );
        // resetPaginator();
      }

      return newList;
    },
    [filter, displayFavs, favourites],
  );

  const orderList = useCallback(
    (activitiesIds: string[], activities: Activities) => {
      let ordered = JSON.parse(JSON.stringify(activitiesIds));
      const orderParam = order.param as keyof Activity;
      const descOrderFn = (a: string, b: string) =>
        activities[a][orderParam] > activities[b][orderParam] ? -1 : 1;
      const ascOrderFn = (a: string, b: string) =>
        activities[a][orderParam] > activities[b][orderParam] ? 1 : -1;

      const sortFn = order.desc ? descOrderFn : ascOrderFn;

      return ordered.sort(sortFn);
    },
    [order.desc, order.param],
  );

  const getActivitiesWithFiltersAndOrder = (activities: Activities) => {
    let filteredIds = getFilteredActivities(activities);
    filteredIds = orderList(filteredIds, activities);

    return filteredIds;
  };

  const getIdsForCurrentPage = (orderedIds: string[]) => {
    const upRange = ITEMS_PER_PAGE * page;
    const lowRange = upRange - ITEMS_PER_PAGE;
    return orderedIds.slice(lowRange, upRange);
  };

  const onOrderSet = (name: string) =>
    setOrder({
      param: name,
      desc: name === order.param ? !order.desc : true,
    });

  const onFilterChange = (name: string) => {
    setFilter(name);
    resetPaginator();
  };

  const onToggleActivityLike = (activity: Activity) => {
    if (!!favourites[activity.id]) dispatch(removeFavourite(activity.id));
    else dispatch(addFavourite(activity));
  };

  return {
    ITEMS_PER_PAGE,
    activities,
    favourites,
    nickname,
    filter,
    onFilterChange,
    displayFavs,
    toggleDisplayFavs,
    getActivitiesWithFiltersAndOrder,
    onOrderSet,
    onToggleActivityLike,
    page,
    setPage,
    getIdsForCurrentPage,
  };
};

export default useActivities;
