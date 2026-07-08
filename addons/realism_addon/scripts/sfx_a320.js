geofs.aircraft.instance.definition.sounds[0].effects.volume.value = "rpm";
geofs.aircraft.instance.definition.sounds[0].effects.pitch.value = "rpm";
geofs.aircraft.instance.definition.sounds[0].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/neo2.mp3"
geofs.aircraft.instance.definition.sounds[1].effects.volume.value = "rpm";
geofs.aircraft.instance.definition.sounds[1].effects.pitch.value = "rpm";
geofs.aircraft.instance.definition.sounds[1].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/neo2.mp3"
geofs.aircraft.instance.definition.sounds[2].effects.volume.value = "rpm";
geofs.aircraft.instance.definition.sounds[2].effects.pitch.value = "rpm";
geofs.aircraft.instance.definition.sounds[2].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/neo3.mp3"
geofs.aircraft.instance.definition.sounds[5].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/startupneo.mp3"

geofs.aircraft.instance.definition.sounds[7] = {}
geofs.aircraft.instance.definition.sounds[7].id = "rpm4"
geofs.aircraft.instance.definition.sounds[7].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/neo2.mp3"
geofs.aircraft.instance.definition.sounds[7].effects = { "volume": { "value": "rpm", "ramp": [800, 950, 2500, 3500], "ratio": 1 }, "pitch": { "value": "rpm", "ramp": [0, 20000, 20000, 20000], "offset": 1, "ratio": 1 } };
geofs.aircraft.instance.definition.sounds[8] = {}
geofs.aircraft.instance.definition.sounds[8].id = "rpm5"
geofs.aircraft.instance.definition.sounds[8].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/neo2.mp3"
geofs.aircraft.instance.definition.sounds[8].effects = { "volume": { "value": "rpm", "ramp": [1000, 2500, 10000, 10000], "ratio": 1 }, "pitch": { "value": "rpm", "ramp": [0, 20000, 20000, 20000], "offset": 1, "ratio": 1.5 } };
geofs.aircraft.instance.definition.sounds[9] = {}
geofs.aircraft.instance.definition.sounds[9].id = "rpm6"
geofs.aircraft.instance.definition.sounds[9].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/neo3.mp3"
geofs.aircraft.instance.definition.sounds[9].effects = { "volume": { "value": "rpm", "ramp": [6000, 20000, 20000, 20000], "ratio": 1 }, "pitch": { "value": "rpm", "ramp": [1000, 20000, 20000, 20000], "offset": 1, "ratio": 1.5 } };

geofs.aircraft.instance.definition.sounds[10] = {}
geofs.aircraft.instance.definition.sounds[10].id = "ptuBork"
geofs.aircraft.instance.definition.sounds[10].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/ptu.mp3"
geofs.aircraft.instance.definition.sounds[10].effects = { "start": { "value": "ptu" } };



//I will implement the UI later once its done. For now just call startEngine(); for both engines.

//GPWS and RadioAlt callout test

isApprConfig = false;
trafficAlt = null;
geofs.animation.values.isFlapsWarn = 0;
geofs.animation.values.isGearWarn = 0;
geofs.animation.values.isTerrainWarn = 0;
geofs.animation.values.isPullupWarn = 0;
geofs.animation.values.isBankWarn = 0;
geofs.animation.values.isTCASClimb = 0;
geofs.animation.values.isTCASDescend = 0;
geofs.animation.values.isTCAS = 0;
geofs.animation.values.isTCASClear = 0;
geofs.animation.values.is100ab = 0;
geofs.animation.values.isWindWarn = 0;
geofs.animation.values.gpws1000 = 0;
geofs.animation.values.gpws500 = 0;
geofs.animation.values.gpws400 = 0;
geofs.animation.values.gpws300 = 0;
geofs.animation.values.gpws200 = 0;
geofs.animation.values.gpws100 = 0;
geofs.animation.values.gpws50 = 0;
geofs.animation.values.gpws40 = 0;
geofs.animation.values.gpws30 = 0;
geofs.animation.values.gpws20 = 0;
geofs.animation.values.gpws10 = 0;
geofs.animation.values.isRetard = 0;
restingPoint = 12.232906828403847;

function getTrafficProximity() {
  Object.values(multiplayer.visibleUsers).forEach(function(e) {
    if (e.distance <= 1000) {
      if (e.referencePoint.lla[2] >= geofs.animation.values.altitudeMeters && e.referencePoint.lla[2] <= geofs.animation.values.altitudeMeters + 100) {
        geofs.animation.values.isTCASDescend = 1;
        if (geofs.animation.values.isTCAS == 0) {
          let tcasInt = setInterval(function(i) {
            if (i <= 2) {
              geofs.animation.values.isTCAS = 1;
            }
            else {
              geofs.animation.values.isTCAS = null;
            }
          }, 1000)
        }
        else {
          geofs.animation.values.isTCASDescend = 0;
        }
        if (e.referencePoint.lla[2] <= geofs.animation.values.altitudeMeters && e.referencePoint.lla[2] >= geofs.animation.values.altitudeMeters - 100) {
          geofs.animation.values.isTCASClimb = 1;
          if (geofs.animation.values.isTCAS == 0) {
            let tcasInt = setInterval(function(i) {
              if (i <= 2) {
                geofs.animation.values.isTCAS = 1;
              }
              else {
                geofs.animation.values.isTCAS = null;
              }
            }, 1000)
          }
        }
        else {
          geofs.animation.values.isTCASClimb = 0;
        }
      }
      else {
        if (geofs.animation.values.isTCASClimb == 1 || geofs.animation.values.isTCASDescend == 1) {
          counterAtClear = counter
          geofs.animation.values.isTCASClimb = 0;
          geofs.animation.values.isTCASDescend = 0;
          geofs.animation.values.isTCAS = 0;

          let counterInterval = setInterval(function(i) {
            if (i <= 3) {
              geofs.animation.values.isTCASClear = 1;
            }
            else {
              geofs.animation.values.isTCASClear = 0;
              clearinterval(counterInterval);
            }
          }, 1000)
        }
      }
    }
  })
}

counter = 0;
counterAtClear = 0;
lastWind = 0;
interval = setInterval(function() {
  if (counter < 2) {
    counter = counter + 1
  }
  else { counter = 0 }
  if (counter == 1) {
    lastWind = weather.currentWindSpeed;
  }

}, 1000)
function getWindShear() {
  if (isApprConfig == 1 && lastWind - weather.currentWindSpeed <= 5) {
    geofs.animation.values.isWindWarn = 1;
  }
  else {
    geofs.animation.values.isWindWarn = 0;
  }
}

function getGearFlapsWarn() {

  if (geofs.animation.values.haglFeet <= 500 && geofs.animation.values.gearPosition == 1 && geofs.animation.values.climbrate < 0 && geofs.animation.values.isPullupWarn == 0) {
    geofs.animation.values.isGearWarn = 1
  }
  else {
    geofs.animation.values.isGearWarn = 0
  }

  if (geofs.animation.values.haglFeet <= 1000 && geofs.animation.values.flapsPosition == 0 && geofs.animation.values.climbrate < 0 && geofs.animation.values.isPullupWarn == 0) {
    geofs.animation.values.isFlapsWarn = 1
  }
  else {
    geofs.animation.values.isFlapsWarn = 0
  }
}

function testTerrainorAppr() {
if (geofs.animation.values.gearPosition == 0) {
  if (geofs.animation.values.haglFeet <= 1000 && geofs.animation.values.climbrate <= -100 && geofs.animation.values.climbrate >= -5000 && geofs.animation.values.isGearWarn == 0 && geofs.animation.values.isFlapsWarn == 0 && isApprConfig == 0) {
    geofs.animation.values.isTerrainWarn = 1;
  }
  else {
    geofs.animation.values.isTerrainWarn = 0;
  }

  if (geofs.animation.values.haglFeet <= 5000 && geofs.animation.values.climbrate <= -2000 || geofs.animation.values.haglFeet <= 1000 && geofs.animation.values.climbrate <= -5000) {
    geofs.animation.values.isPullupWarn = 1;
  }
  else {
    geofs.animation.values.isPullupWarn = 0;
  }
}
  else {
    geofs.animation.values.isTerrainWarn = 0;
    return
  }
}

function getFlapChange() {
  if (geofs.animation.values.flapsPosition < geofs.animation.values.flapsTarget || geofs.animation.values.flapsPosition > geofs.animation.values.flapsTarget) {
    geofs.animation.values.flapschange = 1
  }
  else {
    geofs.animation.values.flapschange = 0
  }
}

function testForApproach() {
  if (geofs.animation.values.isFlapsWarn == 0 && geofs.animation.values.isGearWarn == 0 && geofs.animation.values.climbrate <= -1) {
    isApprConfig = true
  }
  else {
    isApprConfig = false
  }
}

function getRetard() {
  if (geofs.animation.values.gpws20 == 1 || geofs.animation.values.gpws10 == 1) {
    if (geofs.animation.values.throttle >= 0.1) {
      geofs.animation.values.isRetard = 1;
    }
    else {
      geofs.animation.values.isRetard = 0;
    }
  }
  else {
    geofs.animation.values.isRetard = 0;
  }
}

function doRadioAltCall() {
  if (isApprConfig) {
    if (geofs.animation.values.haglFeet <= 1000 + restingPoint && geofs.animation.values.haglFeet >= 900 + restingPoint) {
      geofs.animation.values.gpws1000 = 1;
    }
    else {
      geofs.animation.values.gpws1000 = 0;
    }
    if (geofs.animation.values.haglFeet <= 500 + restingPoint && geofs.animation.values.haglFeet >= 400 + restingPoint) {
      geofs.animation.values.gpws500 = 1;
    }
    else {
      geofs.animation.values.gpws500 = 0;
    }
    if (geofs.animation.values.haglFeet <= 400 + restingPoint && geofs.animation.values.haglFeet >= 300 + restingPoint) {
      geofs.animation.values.gpws400 = 1;
    }
    else {
      geofs.animation.values.gpws400 = 0;
    }
    if (geofs.animation.values.haglFeet <= 300 + restingPoint && geofs.animation.values.haglFeet >= 200 + restingPoint) {
      geofs.animation.values.gpws300 = 1;
    }
    else {
      geofs.animation.values.gpws300 = 0;
    }
    if (geofs.animation.values.haglFeet <= 200 + restingPoint && geofs.animation.values.haglFeet >= 100 + restingPoint) {
      geofs.animation.values.gpws200 = 1;
    }
    else {
      geofs.animation.values.gpws200 = 0;
    }
    if (geofs.animation.values.haglFeet <= 100 + restingPoint && geofs.animation.values.haglFeet >= 50 + restingPoint) {
      geofs.animation.values.gpws100 = 1;
    }
    else {
      geofs.animation.values.gpws100 = 0;
    }
    if (geofs.animation.values.haglFeet <= 50 + restingPoint && geofs.animation.values.haglFeet >= 40 + restingPoint) {
      geofs.animation.values.gpws50 = 1;
    }
    else {
      geofs.animation.values.gpws50 = 0;
    }
    if (geofs.animation.values.haglFeet <= 40 + restingPoint && geofs.animation.values.haglFeet >= 30 + restingPoint) {
      geofs.animation.values.gpws40 = 1;
    }
    else {
      geofs.animation.values.gpws40 = 0;
    }
    if (geofs.animation.values.haglFeet <= 30 + restingPoint && geofs.animation.values.haglFeet >= 20 + restingPoint) {
      geofs.animation.values.gpws30 = 1;
    }
    else {
      geofs.animation.values.gpws30 = 0;
    }
    if (geofs.animation.values.haglFeet <= 20 + restingPoint && geofs.animation.values.haglFeet >= 10 + restingPoint) {
      geofs.animation.values.gpws20 = 1;
    }
    else {
      geofs.animation.values.gpws20 = 0;
    }
    if (geofs.animation.values.haglFeet <= 10 + restingPoint && geofs.animation.values.haglFeet >= 5 + restingPoint) {
      geofs.animation.values.gpws10 = 1;
    }
    else {
      geofs.animation.values.gpws10 = 0;
    }
  }
  else {
    geofs.animation.values.gpws1000 = 0;
    geofs.animation.values.gpws500 = 0;
    geofs.animation.values.gpws400 = 0;
    geofs.animation.values.gpws300 = 0;
    geofs.animation.values.gpws200 = 0;
    geofs.animation.values.gpws100 = 0;
    geofs.animation.values.gpws50 = 0;
    geofs.animation.values.gpws40 = 0;
    geofs.animation.values.gpws30 = 0;
    geofs.animation.values.gpws20 = 0;
    geofs.animation.values.gpws10 = 0;
  }
}

function getStall() {
    if (ui.hud.stallAlarmOn && geofs.animation.values.haglFeet > 20){
        geofs.animation.values.isStall = 1
    }
    else{
        geofs.animation.values.isStall = 0
    }
}

setInterval(function() {
  getTrafficProximity();
  getFlapChange();
  getWindShear();
  testForApproach();
  testTerrainorAppr();
  getRetard();
  doRadioAltCall();
  getStall()
})
//assign alarms and sound fx

geofs.aircraft.instance.definition.sounds[11] = {};
geofs.aircraft.instance.definition.sounds[11].id = "flapssound"
geofs.aircraft.instance.definition.sounds[11].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/777flap.mp3"
geofs.aircraft.instance.definition.sounds[11].effects = { "start": { "value": "flapschange" } }

geofs.aircraft.instance.definition.sounds[12] = {};
geofs.aircraft.instance.definition.sounds[12].id = "landinggearwarn"
geofs.aircraft.instance.definition.sounds[12].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/tlg.mp3"
geofs.aircraft.instance.definition.sounds[12].effects = { "start": { "value": "isGearWarn" } }

geofs.aircraft.instance.definition.sounds[13] = {};
geofs.aircraft.instance.definition.sounds[13].id = "flapswarn"
geofs.aircraft.instance.definition.sounds[13].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/tlf.mp3"
geofs.aircraft.instance.definition.sounds[13].effects = { "start": { "value": "isFlapsWarn" } }

geofs.aircraft.instance.definition.sounds[14] = {};
geofs.aircraft.instance.definition.sounds[14].id = "terrainwarn"
geofs.aircraft.instance.definition.sounds[14].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/tlt.mp3"
geofs.aircraft.instance.definition.sounds[14].effects = { "start": { "value": "isTerrainWarn" } }

geofs.aircraft.instance.definition.sounds[15] = {};
geofs.aircraft.instance.definition.sounds[15].id = "pullwarn"
geofs.aircraft.instance.definition.sounds[15].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/pullup.mp3"
geofs.aircraft.instance.definition.sounds[15].effects = { "start": { "value": "isPullupWarn" } }

geofs.aircraft.instance.definition.sounds[16] = {};
geofs.aircraft.instance.definition.sounds[16].id = "1000"
geofs.aircraft.instance.definition.sounds[16].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/1000ab.mp3"
geofs.aircraft.instance.definition.sounds[16].effects = { "start": { "value": "gpws1000" } }

geofs.aircraft.instance.definition.sounds[17] = {};
geofs.aircraft.instance.definition.sounds[17].id = "500"
geofs.aircraft.instance.definition.sounds[17].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/500ab.mp3"
geofs.aircraft.instance.definition.sounds[17].effects = { "start": { "value": "gpws500" } }

geofs.aircraft.instance.definition.sounds[18] = {};
geofs.aircraft.instance.definition.sounds[18].id = "400"
geofs.aircraft.instance.definition.sounds[18].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/400ab.mp3"
geofs.aircraft.instance.definition.sounds[18].effects = { "start": { "value": "gpws400" } }

geofs.aircraft.instance.definition.sounds[19] = {};
geofs.aircraft.instance.definition.sounds[19].id = "300"
geofs.aircraft.instance.definition.sounds[19].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/300ab.mp3"
geofs.aircraft.instance.definition.sounds[19].effects = { "start": { "value": "gpws300" } }

geofs.aircraft.instance.definition.sounds[20] = {};
geofs.aircraft.instance.definition.sounds[20].id = "200"
geofs.aircraft.instance.definition.sounds[20].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/200ab.mp3"
geofs.aircraft.instance.definition.sounds[20].effects = { "start": { "value": "gpws200" } }

geofs.aircraft.instance.definition.sounds[21] = {};
geofs.aircraft.instance.definition.sounds[21].id = "100"
geofs.aircraft.instance.definition.sounds[21].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/100abtrue.mp3"
geofs.aircraft.instance.definition.sounds[21].effects = { "start": { "value": "gpws100" } }

geofs.aircraft.instance.definition.sounds[22] = {};
geofs.aircraft.instance.definition.sounds[22].id = "50"
geofs.aircraft.instance.definition.sounds[22].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/50ab.mp3"
geofs.aircraft.instance.definition.sounds[22].effects = { "start": { "value": "gpws50" } }

geofs.aircraft.instance.definition.sounds[23] = {};
geofs.aircraft.instance.definition.sounds[23].id = "40"
geofs.aircraft.instance.definition.sounds[23].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/40ab.mp3"
geofs.aircraft.instance.definition.sounds[23].effects = { "start": { "value": "gpws40" } }

geofs.aircraft.instance.definition.sounds[24] = {};
geofs.aircraft.instance.definition.sounds[24].id = "30"
geofs.aircraft.instance.definition.sounds[24].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/30ab.mp3"
geofs.aircraft.instance.definition.sounds[24].effects = { "start": { "value": "gpws30" } }

geofs.aircraft.instance.definition.sounds[25] = {};
geofs.aircraft.instance.definition.sounds[25].id = "20"
geofs.aircraft.instance.definition.sounds[25].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/20ab.mp3"
geofs.aircraft.instance.definition.sounds[25].effects = { "start": { "value": "gpws20" } }

geofs.aircraft.instance.definition.sounds[26] = {};
geofs.aircraft.instance.definition.sounds[26].id = "10"
geofs.aircraft.instance.definition.sounds[26].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/10ab.mp3"
geofs.aircraft.instance.definition.sounds[26].effects = { "start": { "value": "gpws10" } }

geofs.aircraft.instance.definition.sounds[27] = {};
geofs.aircraft.instance.definition.sounds[27].id = "TCAS"
geofs.aircraft.instance.definition.sounds[27].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/traffic.mp3"
geofs.aircraft.instance.definition.sounds[27].effects = { "start": { "value": "isTCAS" } }

geofs.aircraft.instance.definition.sounds[28] = {};
geofs.aircraft.instance.definition.sounds[28].id = "climb"
geofs.aircraft.instance.definition.sounds[28].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/climb.mp3"
geofs.aircraft.instance.definition.sounds[28].effects = { "start": { "value": "isTCASClimb" } }

geofs.aircraft.instance.definition.sounds[29] = {};
geofs.aircraft.instance.definition.sounds[29].id = "descend"
geofs.aircraft.instance.definition.sounds[29].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/descend.mp3"
geofs.aircraft.instance.definition.sounds[29].effects = { "start": { "value": "isTCASDescend" } }

geofs.aircraft.instance.definition.sounds[30] = {};
geofs.aircraft.instance.definition.sounds[30].id = "clear"
geofs.aircraft.instance.definition.sounds[30].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/clear.mp3"
geofs.aircraft.instance.definition.sounds[30].effects = { "start": { "value": "isTCASClear" } }

geofs.aircraft.instance.definition.sounds[31] = {};
geofs.aircraft.instance.definition.sounds[31].id = "retard"
geofs.aircraft.instance.definition.sounds[31].file = "https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/retard.mp3"
geofs.aircraft.instance.definition.sounds[31].effects = { "start": { "value": "isRetard" } }

geofs.aircraft.instance.definition.sounds[32] = {};
geofs.aircraft.instance.definition.sounds[32].id = "stall"
geofs.aircraft.instance.definition.sounds[32].file = "https://sage-narwhal-290a3c.netlify.app/airbusstall.mp3"
geofs.aircraft.instance.definition.sounds[32].effects = { "start": { "value": "isStall" } }

audio.init(geofs.aircraft.instance.definition.sounds);
geofs.aircraft.instance.definition.sounds[0].effects.volume.ratio = 100
geofs.aircraft.instance.definition.sounds[1].effects.volume.ratio = 100
geofs.aircraft.instance.definition.sounds[2].effects.volume.ratio = 100
geofs.aircraft.instance.definition.sounds[3].effects.volume.ratio = 100
geofs.aircraft.instance.definition.sounds[7].effects.volume.ratio = 100
geofs.aircraft.instance.definition.sounds[8].effects.volume.ratio = 100
geofs.aircraft.instance.definition.sounds[9].effects.volume.ratio = 100
