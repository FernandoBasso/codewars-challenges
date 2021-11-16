import {
  compose,
  groupBy,
  map,
  pluck,
} from 'ramda';

const getGroups = user => {
  ////
  // This also works.
  //
  //   return user.status !== 'online' ?  'offline' : user.lastActivity > 10 ?  'away' : 'online';
  //

  if (user.status === 'online') {
    if (user.lastActivity > 10) return 'away';

    return 'online';
  }

  return 'offline';
};

export const whosOnline = compose(
  map(pluck('username')),
  groupBy(getGroups),
);
