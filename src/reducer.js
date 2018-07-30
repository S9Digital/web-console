const DEFAULT_STATE = {
  wakeTime: null,
  sleepTime: null,
  alarm: false,
  alarmTime: null,
  alarmDuration: 60,
  alarmSoundId: "default",
  scenes: ["relax", "bedtime", "energize", "circadian"],
  scene: null,
  lightsNumber: 0,
  sleepSoundVolume: 50,
  sleepSoundDuration: 50,
  lightBrightness: 20,
  lightTone: 70,
  lightsPower: false,
  napEnd: 0,
  napSound: false,
  timerEnd: 0,
  timerLights: false,
  timerSound: false,
  modal: null,
  userActions: []
};

export default function reducer(state = DEFAULT_STATE, action) {
  return state;
}
