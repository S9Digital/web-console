export const SET_DEFAULTS_ATTEMPT = "SET_DEFAULTS_ATTEMPT";
export const SET_DEFAULTS_SUCCESS = "SET_DEFAULTS_SUCCESS";
export const SET_DEFAULTS_ERROR = "SET_DEFAULTS_ERROR";
export const setDefaults = (
  wakeTime,
  sleepTime,
  alarmTime,
  alarmSound,
  alarmDuration,
  minCCT,
  maxCCT,
  minLevel,
  maxLevel,
  settingsResetTime,
  scheduleMode
) => dispatch => {
  dispatch({ type: SET_DEFAULTS_ATTEMPT });
  //insert API fetch call from ARIO backend {put}/v1/property/{propertyId}/defaults
  dispatch({
    type: SET_DEFAULTS_SUCCESS,
    wakeTime: wakeTime,
    sleepTime: sleepTime,
    alarmTime,
    alarmSound,
    alarmDuration,
    minCCT: minCCT,
    maxCCT: maxCCT,
    minLevel: minLevel,
    maxLevel: maxLevel,
    settingsResetTime: settingsResetTime,
    scheduleMode
  });
  //   .catch(error => {
  //   dispatch({type: SET_DEFAULTS_ERROR, error: error})
  //   })
};

// export const GET_DEFAULTS_ATTEMPT = "GET_DEFAULTS_ATTEMPT";
// export const GET_DEFAULTS_SUCCESS = "GET_DEFAULTS_SUCCESS";
// export const GET_DEFAULTS_ERROR = "GET_DEFAULTS_ERROR";
// export const getDefaults = (
//   wakeTime,
//   sleepTime,
//   alarmTime,
//   alarmSound,
//   alarmDuration,
//   minCCT,
//   maxCCT,
//   minLevel,
//   maxLevel,
//   settingsResetTime,
//   scheduleMode,
//   //lastUpdated
// ) => dispatch => {
//   dispatch({ type: GET_DEFAULTS_ATTEMPT });
//   //insert API fetch call from ARIO backend {get}/v1/property/{propertyId}/defaults
//   dispatch({
//     type: GET_DEFAULTS_SUCCESS,
//     wakeTime: wakeTime,
//     sleepTime: sleepTime,
//     alarmTime,
//     alarmSound,
//     alarmDuration,
//     minCCT: minCCT,
//     maxCCT: maxCCT,
//     minLevel: minLevel,
//     maxLevel: maxLevel,
//     settingsResetTime: settingsResetTime,
//     scheduleMode,
//     //lastUpdated
//   });
//   //   .catch(error => {
//   //   dispatch({type: GET_DEFAULTS_ERROR, error: error})
//   //   })
// };

export const SET_ROOM_ATTEMPT = "SET_ROOM_ATTEMPT";
export const SET_ROOM_SUCCESS = "SET_ROOM_SUCCESS";
export const SET_ROOM_ERROR = "SET_ROOM_ERROR";
export const setRoom = (
  id,
  // name,
  // hasIssue,
  // bulbs,
  // schedule,
  // alarm,
  // sleepSound,
  // tablet,
  // sensors
  wakeTime,
  sleepTime,
  alarmTime,
  alarmSound,
  alarmDuration,
  minCCT,
  maxCCT,
  minLevel,
  maxLevel,
  settingsResetTime,
  scheduleMode
) => dispatch => {
  dispatch({ type: SET_ROOM_ATTEMPT });
  //insert
  dispatch({
    type: SET_ROOM_SUCCESS,
    id: id,
    wakeTime: wakeTime,
    sleepTime: sleepTime,
    alarmTime: alarmTime,
    alarmSound: alarmSound,
    alarmDuration: alarmDuration,
    minCCT: minCCT,
    maxCCT: maxCCT,
    minLevel,
    minLevel,
    maxLevel: maxLevel,
    settingsRestTime: settingsResetTime,
    scheduleMode: scheduleMode
    // name: name,
    // hasIssue: hasIssue,
    // bulbs: bulbs,
    // schedule: schedule,
    // alarm: alarm,
    // sleepSound: sleepSound,
    // tablet: tablet,
    // sensors: sensors
  });
  //   .catch(error => {
  //   dispatch({type: SET_ROOM_ERROR, error: error})
  //   })
};

export const GET_ROOM_ATTEMPT = "GET_ROOM_ATTEMPT";
export const GET_ROOM_SUCCESS = "GET_ROOM_SUCCESS";
export const GET_ROOM_ERROR = "GET_ROOM_ERROR";
export const getRoom = (
  id,
  name,
  hasIssue,
  bulbs,
  schedule,
  alarm,
  sleepSound,
  tablet,
  sensors,
  lastMotionTime
) => dispatch => {
  dispatch({ type: GET_ROOM_ATTEMPT });
  //fetch (from ARIO backend URL{get}/v1/room/{roomId})
  dispatch({
    type: GET_ROOM_SUCCESS,
    id: id,
    name: name,
    hasIssue: hasIssue,
    bulbAddress: bulbs.address,
    bulbCounter: bulbs.counter,
    bulbAllOn: bulbs.allOnGroupMember,
    bulbAlarmGroup: bulbs.alarmGroupMember,
    bulbLastHeard: bulbs.lastSeen,
    bulbLastUpdated: bulbs.scheduleLastUpdated,
    bulbKey: bulbs.key,
    wakeTime: schedule.wakeTime,
    sleepTime: schedule.sleepTime,
    alarmTime: alarm.time,
    alarmSoundId: alarm.soundId,
    alarmDuration: alarm.duration,
    alarmSoundEnabled: alarm.soundEnabled,
    alarmLightEnabled: alarm.lightEnabled,
    sleepSoundActive: sleepSound.isActive,
    sleepSoundId: sleepSound.soundId,
    sleepSoundDuration: sleepSound.duration,
    tablet: tablet.lastHeard,
    sensorsTemp: sensors.temp,
    sensorsHumidity: sensors.humdity,
    sensorsLightLevel: sensors.lightLevel,
    sensorsLastMotionTime: sensors.lastMotionTime,
    sensorsLastMotionMagnitude: sensors.sensorsLastMotionMagnitude
  });
};

//post method for backend API
// export const SET_ROOM_ATTEMPT = "SET_ROOM_ATTEMPT";
// export const SET_ROOM_SUCCESS = "SET_ROOM_SUCCESS";
// export const SET_ROOM_ERROR = "SET_ROOM_ERROR";
// export const setRoom = (
// id,
// name,
// hasIssue,
// bulbs,
// schedule,
// alarm,
// sleepSound,
// tablet,
// sensors
//   wakeTime,
//   sleepTime,
//   alarmTime,
//   alarmSound,
//   alarmDuration,
//   minCCT,
//   maxCCT,
//   minLevel,
//   maxLevel,
//   settingsResetTime,
//   scheduleMode
// ) => dispatch => {
//   dispatch({ type: SET_ROOM_ATTEMPT });
//insert ARIO backend API post method {post}/v1/room/{roomId}/update
// dispatch({
//   type: SET_ROOM_SUCCESS,
//   id: id,
//   name: name,
//   hasIssue: hasIssue,
//   bulbAddress: bulbs.address,
//   bulbCounter: bulbs.counter,
//   bulbAllOn: bulbs.allOnGroupMember,
//   bulbAlarmGroup: bulbs.alarmGroupMember,
//   bulbLastHeard: bulbs.lastSeen,
//   bulbLastUpdated: bulbs.scheduleLastUpdated,
//   bulbKey: bulbs.key,
//   wakeTime: schedule.wakeTime,
//   sleepTime: schedule.sleepTime,
//   alarmTime: alarm.time,
//   alarmSoundId: alarm.soundId,
//   alarmDuration: alarm.duration,
//   alarmSoundEnabled: alarm.soundEnabled,
//   alarmLightEnabled: alarm.lightEnabled,
//   sleepSoundActive: sleepSound.isActive,
//   sleepSoundId: sleepSound.soundId,
//   sleepSoundDuration: sleepSound.duration,
//   tablet: tablet.lastHeard,
//   sensorsTemp: sensors.temp,
//   sensorsHumidity: sensors.humdity,
//   sensorsLightLevel: sensors.lightLevel,
//   sensorsLastMotionTime: sensors.lastMotionTime,
//   sensorsLastMotionMagnitude: sensors.sensorsLastMotionMagnitude,
//error code
// });
//   .catch(error => {
//   dispatch({type: SET_ROOM_ERROR, error: error})
//   })
// };

// post alarm method
//{post}/v1/room/{roomId}/alarm
//{ time: moment, soundId: string, duration: number, soundEnabled: boolean,lightEnabled: boolean }
