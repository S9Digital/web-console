export const SET_DEFAULTS_ATTEMPT = "SET_DEFAULTS_ATTEMPT";
export const SET_DEFAULTS_SUCCESS = "SET_DEFAULTS_SUCCESS";
export const SET_DEFAULTS_ERROR = "SET_DEFAULTS_ERROR";
export const setDefaults = (
  wakeTime,
  sleepTime,
  minCCT,
  maxCCT,
  minLevel,
  maxLevel,
  settingsResetTime
) => dispatch => {
  dispatch({ type: SET_DEFAULTS_ATTEMPT });
  //insert
  dispatch({
    type: SET_DEFAULTS_SUCCESS,
    wakeTime: wakeTime,
    sleepTime: sleepTime,
    minCCT: minCCT,
    maxCCT: maxCCT,
    minLevel: minLevel,
    maxLevel: maxLevel,
    settingsResetTime: settingsResetTime
  });
  //   .catch(error => {
  //   dispatch({type: SET_DEFAULTS_ERROR, error: error})
  //   })
};

export const SET_ROOM_ATTEMPT = "SET_ROOM_ATTEMPT";
export const SET_ROOM_SUCCESS = "SET_ROOM_SUCCESS";
export const SET_ROOM_ERROR = "SET_ROOM_ERROR";
export const setRoom = (
  id,
  name,
  hasIssue,
  bulbs,
  schedule,
  alarm,
  sleepSound,
  tablet,
  sensors
) => dispatch => {
  dispatch({ type: SET_ROOM_ATTEMPT });
  //insert
  dispatch({
    type: SET_ROOM_SUCCESS,
    id: id,
    name: name,
    hasIssue: hasIssue,
    bulbs: bulbs,
    schedule: schedule,
    alarm: alarm,
    sleepSound: sleepSound,
    tablet: tablet,
    sensors: sensors
  });
  //   .catch(error => {
  //   dispatch({type: SET_ROOM_ERROR, error: error})
  //   })
};
