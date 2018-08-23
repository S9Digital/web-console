import {
  SET_DEFAULTS_ATTEMPT,
  SET_DEFAULTS_SUCCESS,
  SET_DEFAULTS_ERROR,
  SET_ROOM_ATTEMPT,
  SET_ROOM_SUCCESS,
  SET_ROOM_ERROR
} from "./actions/PropertyActions";

import {
  CREATE_USER_ATTEMPT,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  EDIT_USER_ATTEMPT,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  CREATE_PROPERTY_ATTEMPT,
  CREATE_PROPERTY_SUCCESS,
  CREATE_PROPERTY_ERROR,
  EDIT_PROPERTY_ATTEMPT,
  EDIT_PROPERTY_SUCCESS,
  EDIT_PROPERTY_ERROR
} from "./actions/ProfileActions";

const DEFAULT_STATE = {
  default: {
    wakeTime: null,
    sleepTime: null,
    alarm: { time: null, soundId: "Music AB", duration: "60" },
    minCCT: "500",
    maxCCT: "2500",
    minLevel: "0",
    maxLevel: "100",
    settingsResetTime: null,
    scheduleMode: null
  },
  alerts: null,
  // wakeTime: null,
  // sleepTime: null,
  // minCCT: null,
  // maxCCT: null,
  // minLevel: null,
  // maxLevel: null,
  // settingsResetTime: null,
  // alarmTime: null,
  // alarmDuration: 60,
  // alarmSoundId: "default",
  // scenes: ["relax", "bedtime", "energize", "circadian"],
  // scene: null,
  // lightsNumber: 0,
  // sleepSoundVolume: 50,
  // sleepSoundDuration: 50,
  // lightBrightness: 20,
  // lightTone: 70,
  // lightsPower: false,
  // napEnd: 0,
  // napSound: false,
  // timerEnd: 0,
  // timerLights: false,
  // timerSound: false,
  // modal: null,
  user: "Joe Smith",
  address: "123 West Street Seattle, WA 98123",
  currentRoomsOccupied: 15,
  currentLightsOn: 12,
  currentAlarmsSet: 5,
  currentAlarmMostUsed: "Music ABC",
  currentLightMostUsed: "10",
  weeklyRoomsOccupied: 68,
  weeklyLightsOn: 50,
  weeklyAlarmsSet: 30,
  weeklyAlarmMostUsed: "Music ABC",
  weeklyLightMostUsed: "8",
  userActions: [],
  users: [
    {
      id: "user1",
      name: "test",
      email: "email@email.com",
      password: "password",
      isAdmin: true,
      isSuperAdmin: true,
      propertyId: "123"
    },
    {
      id: "user2",
      name: "test2",
      email: "email2@email.com",
      password: "password2",
      isAdmin: false,
      isSuperAdmin: false,
      propertyId: "123"
    }
  ],
  properties: [
    { id: "123", name: "property 1", location: "place" },
    { id: "456", name: "property 2", location: "place" },
    { id: "789", name: "property 3", location: "place" }
  ],
  property: null,
  rooms: [
    {
      propertyId: "123",
      id: "123AB",
      number: "101",
      sleepTime: "9:30pm",
      wakeTime: "6:00am",
      alarm: { time: null, soundId: "Music AB", duration: "60" },
      sleepSound: { isActive: null, soundId: null, duration: null },
      tablet: { lastHeard: null, on: true },
      sensors: {
        temp: null,
        humididty: null,
        lightLevel: null,
        lastMotionTime: null,
        lastMotionMagnititude: null
      },
      bulbs: [
        { id: 1, error: true, lastHeard: "12:00" },
        { id: 2, error: true, lastHeard: "12:00" },
        { id: 3, error: true, lastHeard: "12:00" },
        { id: 4, error: true, lastHeard: "12:00" },
        { id: 5, error: true, lastHeard: "12:00" },
        { id: 6, error: true, lastHeard: "12:00" },
        { id: 7, error: true, lastHeard: "12:00" },
        { id: 8, error: true, lastHeard: "12:00" },
        { id: 9, error: true, lastHeard: "12:00" },
        { id: 10, error: true, lastHeard: "12:00" },
        { id: 11, error: true, lastHeard: "12:00" },
        { id: 12, error: true, lastHeard: "12:00" },
        { id: 13, error: true, lastHeard: "12:00" },
        { id: 14, error: true, lastHeard: "12:00" },
        { id: 15, error: true, lastHeard: "12:00" },
        { id: 16, error: true, lastHeard: "12:00" },
        { id: 17, error: true, lastHeard: "12:00" },
        { id: 18, error: true, lastHeard: "12:00" },
        { id: 19, error: true, lastHeard: "12:00" },
        { id: 20, error: true, lastHeard: "12:00" },
        { id: 21, error: true, lastHeard: "12:00" },
        { id: 22, error: true, lastHeard: "12:00" },
        { id: 23, error: true, lastHeard: "12:00" },
        { id: 24, error: true, lastHeard: "12:00" },
        { id: 25, error: true, lastHeard: "12:00" }
      ],
      schedule: false,
      tabletOn: false,
      hasIssue: false
    },
    {
      propertyId: "123",
      number: "102",
      id: "456AB",
      sleepTime: null,
      wakeTime: null,
      alarm: { time: null, soundId: null, duration: null },
      sleepSound: { isActive: null, soundId: null, duration: null },
      tablet: { lastHeard: null, on: true },
      sensors: {
        temp: null,
        humididty: null,
        lightLevel: null,
        lastMotionTime: null,
        lastMotionMagnititude: null
      },
      bulbs: [
        { id: 1, error: false, lastHeard: "12:00" },
        { id: 2, error: true, lastHeard: "12:00" },
        { id: 3, error: false, lastHeard: "12:00" },
        { id: 4, error: false, lastHeard: "12:00" },
        { id: 5, error: false, lastHeard: "12:00" },
        { id: 6, error: true, lastHeard: "12:00" },
        { id: 7, error: false, lastHeard: "12:00" },
        { id: 8, error: false, lastHeard: "12:00" },
        { id: 9, error: true, lastHeard: "12:00" },
        { id: 10, error: false, lastHeard: "12:00" },
        { id: 11, error: false, lastHeard: "12:00" },
        { id: 12, error: false, lastHeard: "12:00" },
        { id: 13, error: false, lastHeard: "12:00" },
        { id: 14, error: true, lastHeard: "12:00" },
        { id: 15, error: false, lastHeard: "12:00" },
        { id: 16, error: false, lastHeard: "12:00" },
        { id: 17, error: false, lastHeard: "12:00" },
        { id: 18, error: false, lastHeard: "12:00" },
        { id: 19, error: false, lastHeard: "12:00" },
        { id: 20, error: false, lastHeard: "12:00" },
        { id: 21, error: false, lastHeard: "12:00" },
        { id: 22, error: false, lastHeard: "12:00" },
        { id: 23, error: false, lastHeard: "12:00" },
        { id: 24, error: true, lastHeard: "12:00" },
        { id: 25, error: true, lastHeard: "12:00" }
      ],
      schedule: true
    },
    {
      propertyId: "456",
      number: "103",
      id: "456BC",
      sleepTime: "10:30pm",
      wakeTime: "11:00am",
      alarm: "Music CD",
      tablet: { lastHeard: null, on: true },
      bulbs: [
        { id: 1, error: false, lastHeard: "12:00" },
        { id: 2, error: false, lastHeard: "12:00" },
        { id: 3, error: false, lastHeard: "12:00" },
        { id: 4, error: false, lastHeard: "12:00" },
        { id: 5, error: false, lastHeard: "12:00" },
        { id: 6, error: false, lastHeard: "12:00" },
        { id: 7, error: false, lastHeard: "12:00" },
        { id: 8, error: false, lastHeard: "12:00" },
        { id: 9, error: false, lastHeard: "12:00" },
        { id: 10, error: false, lastHeard: "12:00" },
        { id: 11, error: false, lastHeard: "12:00" },
        { id: 12, error: false, lastHeard: "12:00" },
        { id: 13, error: false, lastHeard: "12:00" },
        { id: 14, error: false, lastHeard: "12:00" },
        { id: 15, error: false, lastHeard: "12:00" },
        { id: 16, error: false, lastHeard: "12:00" },
        { id: 17, error: false, lastHeard: "12:00" },
        { id: 18, error: false, lastHeard: "12:00" },
        { id: 19, error: false, lastHeard: "12:00" },
        { id: 20, error: false, lastHeard: "12:00" },
        { id: 21, error: false, lastHeard: "12:00" },
        { id: 22, error: false, lastHeard: "12:00" },
        { id: 23, error: false, lastHeard: "12:00" },
        { id: 24, error: false, lastHeard: "12:00" },
        { id: 25, error: false, lastHeard: "12:00" }
      ],
      schedule: true,
      tabletOn: false
    },
    {
      propertyId: "123",
      number: "104",
      id: "789AB",
      sleepTime: "10:30pm",
      wakeTime: "11:00am",
      alarm: "Music CD",
      tablet: { lastHeard: null, on: true },
      bulbs: [
        { id: 1, error: false },
        { id: 2, error: true },
        { id: 3, error: false },
        { id: 4, error: false },
        { id: 5, error: false },
        { id: 6, error: true },
        { id: 7, error: false },
        { id: 8, error: false },
        { id: 9, error: true },
        { id: 10, error: false },
        { id: 11, error: false },
        { id: 12, error: true },
        { id: 13, error: false },
        { id: 14, error: true },
        { id: 15, error: false },
        { id: 16, error: false },
        { id: 17, error: false },
        { id: 18, error: true },
        { id: 19, error: false },
        { id: 20, error: false },
        { id: 21, error: true },
        { id: 22, error: false },
        { id: 23, error: false },
        { id: 24, error: true },
        { id: 25, error: true }
      ],
      schedule: true,
      tabletOn: false
    },
    {
      propertyId: "123",
      number: "105",
      id: "789BC",
      sleepTime: "10:30pm",
      wakeTime: "11:00am",
      alarm: "Music CD",
      tablet: { lastHeard: null, on: true },
      bulbs: [
        { id: 1, error: false },
        { id: 2, error: true },
        { id: 3, error: false },
        { id: 4, error: false },
        { id: 5, error: false },
        { id: 6, error: true },
        { id: 7, error: false },
        { id: 8, error: false },
        { id: 9, error: true },
        { id: 10, error: false },
        { id: 11, error: false },
        { id: 12, error: true },
        { id: 13, error: false },
        { id: 14, error: true },
        { id: 15, error: false },
        { id: 16, error: false },
        { id: 17, error: false },
        { id: 18, error: true },
        { id: 19, error: false },
        { id: 20, error: false },
        { id: 21, error: true },
        { id: 22, error: false },
        { id: 23, error: false },
        { id: 24, error: true },
        { id: 25, error: true }
      ],
      schedule: true,
      tabletOn: false
    },
    {
      propertyId: "123",
      id: "123BC",
      number: "106",
      sleepTime: "9:30pm",
      wakeTime: "6:00am",
      alarm: "Music AB",
      bulbs: [
        { id: 1, error: true },
        { id: 2, error: true },
        { id: 3, error: true },
        { id: 4, error: true },
        { id: 5, error: true },
        { id: 6, error: true },
        { id: 7, error: true },
        { id: 8, error: true },
        { id: 9, error: true },
        { id: 10, error: true },
        { id: 11, error: true },
        { id: 12, error: true },
        { id: 13, error: true },
        { id: 14, error: true },
        { id: 15, error: true },
        { id: 16, error: true },
        { id: 17, error: true },
        { id: 18, error: true },
        { id: 19, error: true },
        { id: 20, error: true },
        { id: 21, error: true },
        { id: 22, error: true },
        { id: 23, error: true },
        { id: 24, error: true },
        { id: 25, error: true }
      ],
      schedule: false,
      tabletOn: false
    }
  ]
};

export default function reducer(state = DEFAULT_STATE, action) {
  if (action.type === SET_DEFAULTS_SUCCESS) {
    return {
      ...state,
      default: {
        wakeTime: action.wakeTime,
        sleepTime: action.sleepTime,
        alarm: {
          time: action.alarmTime,
          soundId: action.alarmSound,
          duration: action.alarmDuration
        },
        minCCT: action.minCCT,
        maxCCT: action.maxCCT,
        minLevel: action.minLevel,
        maxLevel: action.maxLevel,
        settingsResetTime: action.settingsResetTime,
        sheduleMode: action.scheduleMode
      }
    };
  }
  if (action.type === CREATE_USER_SUCCESS) {
    //create user id
    return {
      ...state,
      users: [
        {
          id: "345",
          email: action.email,
          name: action.name,
          password: action.password,
          isAdmin: action.isAdmin,
          isSuperAdmin: action.isSuperAdmin
        },
        ...state.users
      ]
    };
  }
  if (action.type === EDIT_USER_SUCCESS) {
    //create user id
    return {
      ...state,
      users: [
        {
          id: "345",
          email: action.email,
          name: action.name,
          password: action.password,
          isAdmin: action.isAdmin,
          isSuperAdmin: action.isSuperAdmin
        },
        ...state.users
      ]
    };
  }
  if (action.type === CREATE_PROPERTY_SUCCESS) {
    //create user property id
    return {
      ...state,
      properties: [
        {
          name: action.name,
          location: action.address
        },
        ...state.properties
      ]
    };
  }
  return state;
}
