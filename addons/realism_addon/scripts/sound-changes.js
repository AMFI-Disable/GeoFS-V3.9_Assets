function addEffects() {
geofs.animation.values.nullAnimation = null;
//Most of these functions developed by AriakimTaiyo
function radians(n) {
  return n * (Math.PI / 180);
};
function degrees(n) {
  return n * (180 / Math.PI);
};
//find direction from camera in degrees. 0 should be directly behind, 90 is to the left of the plane, 180 is in front, and 270 is to the right.
function getCameraDirection() {
  var a = geofs.api.getCameraLla(geofs.camera.cam);
  var b = geofs.aircraft.instance.llaLocation;
  var startLat = radians(a[0]);
  var startLong = radians(a[1]);
  var endLat = radians(b[0]);
  var endLong = radians(b[1]);

  let dLong = endLong - startLong;

  let dPhi = Math.log(Math.tan(endLat/2.0+Math.PI/4.0)/Math.tan(startLat/2.0+Math.PI/4.0));
  if (Math.abs(dLong) > Math.PI){
    if (dLong > 0.0)
       dLong = -(2.0 * Math.PI - dLong);
    else
       dLong = (2.0 * Math.PI + dLong);
  }
  return (degrees(Math.atan2(dLong, dPhi)) + 270.0) % 360.0;
};
function checkPos() {
    var a = (getCameraDirection() - geofs.animation.values.heading360) % 360;
    var b = radians(a);
    var c = Math.cos(b);
    var d = Math.sin(b);
    var e = clamp((clamp(d, 0, 1) + Math.abs(c)), 0, 1)
    var f = clamp((clamp(-d, 0, 1) - Math.abs(c)), 0, 1)
	 //HOW THIS WORKS: f is backblast, e is front sound. both are equal 180-degree halves if used as below.
    return [e,f];
  };
function getJetSounds() {
   if (geofs.aircraft.instance.id == 7 || geofs.aircraft.instance.id == 2857 || geofs.aircraft.instance.id == 4172 || geofs.aircraft.instance.id == 2364 || geofs.aircraft.instance.id == 3591) {
geofs.aircraft.instance.definition.sounds.forEach(function(e){
   if (e.file.includes("f16") && e.id.includes("rpm2")) {
if (checkPos()[0] >= 0.99 && checkPos()[1] < 0.99) {
	e.effects.volume.value = "nullAnimation";
} 
if (checkPos()[1] >= 0 && checkPos()[0] < 0.99) {
   e.effects.volume.value = "rpm";
}
	}
if (e.file.includes("f16") && e.id.includes("rpm1")) {
   if (checkPos()[0] >= 0.99 && checkPos()[1] < 0.99) {
e.effects.volume.ramp = [3000, 5000, 11000, 11000]
	}
   if (checkPos()[1] >= 0 && checkPos()[0] < 0.99) {
e.effects.volume.ramp = [3000, 5000, 9000, 9500]
   }
}
})
   }
   if (geofs.animation.values.mach > 1 && checkPos()[0] >= 0.99 && checkPos()[1] < 0.99 && geofs.camera.currentModeName != "cockpit") {
audio.on = 0
audio.stop();
	} else if (checkPos()[1] >= 0 && checkPos()[0] < 0.99 && audio.on == 0 && geofs.preferences.sound == 1) {
audio.on = 1
   }
   if (checkPos()[0] > 0.99 && checkPos()[0] < 1 && geofs.animation.values.mach > 1 && geofs.preferences.sound == 1 && (geofs.camera.currentModeName == "free" || geofs.camera.currentModeName == "chase")) {
console.log("Sonic boom time")
audio.impl.html5.playFile("https://geofs-assets.evengao6688.workers.dev/addons/realism_addon/audio/sonicboom.mp3")
   }
//console.log(checkPos()[0] + ", " + checkPos()[1])
};
jetSoundsInterval = setInterval(function(){getJetSounds()},100)
}
