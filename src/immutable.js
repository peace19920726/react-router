import createAll from './createAll'
import immutableStructure from './structure/immutable'

export const {
  LOCATION_CHANGE,
  CALL_HISTORY_METHOD,
  push,
  replace,
  go,
  goBack,
  goForward,
  routerActions,
  ConnectedRouter,
  connectRouter,
  routerMiddleware,
  getLocation,
  getAction,
  createMatchSelector,
} = createAll(immutableStructure)
