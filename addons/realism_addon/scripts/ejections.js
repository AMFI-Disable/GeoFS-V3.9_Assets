    const EJAircraft= new Set ([5431, 5405, 3, 7, 29, 18, 4172, 3617, 2581, 2857, 2948, 2988, 2310, 3591, 5229, 2364, 1024, 27]);
   
    function runEjections() {
        //so you don't get notified about the ejection seats every single second
        var notifiedEject = new Boolean(0)
        //this is for the canopy blow-off animation
        geofs.animation.values.eject = 0
        //so the "ejection simulation" code only executes once
        var ejected = new Boolean(1);
        function checkForEjections() {
            //if in an aircraft with ejection seats
            let checkNumber = Number(geofs.aircraft.instance.id);
            window.hasEJ = EJAircraft.has(checkNumber);
            if (window.hasEJ) {
                //notifying you of the existence of ejection seats
                if (notifiedEject == 0) {
                    ui.notification.show("Press E while airborne to eject");
                    setTimeout(() => {
                        document.querySelectorAll(".geofs-haring").forEach(el => el.remove());
                    }, 3000);

                    notifiedEject = 1
                };
                //if you've turned the engines off, haven't ejected, and are airborne
                if (geofs.animation.values.enginesOn == 0 && geofs.animation.values.groundContact == 0 && ejected == 0) {
                    console.log("eject");
                    //cockpit camera animation?
                    if (geofs.camera.currentModeName.toLowerCase() !== "follow") {
                        geofs.camera.set(0)
                    }
                    //with "ejected" set to true, the code inside the "if" statement only executes once
                    ejected = 1
                    //setting the animation value for the canopy animation
                    geofs.animation.values.eject = 1;
                    //switch you to a paraglider in two seconds (parachute inflation time)
                    //setTimeout(() => {geofs.aircraft.instance.change(50);}, 2000);
                    //tell you what you did
                    //ui.notification.show("You ejected from your aircraft");
                    //play the "ejection sound"
                    audio.impl.html5.playFile("https://138772948-227015667470610340.preview.editmysite.com/uploads/1/3/8/7/138772948/softtouch.mp3");
                    //canopy animation - with animation.values.eject set to 1, the canopy teleports out of view
                    geofs.aircraft.instance.definition.parts.forEach(function(e){
                    if (e.name.includes('canopy') || e.name.includes('Canopy')) {
                        e.animations[1] = {};
                        e.animations[1].type = "translate";
                            e.animations[1].axis = [0, 0, 1];
                        e.animations[1].value = "eject";
                        e.animations[1].ratio = 100;
                        e.animations[1].currentValue = null;
                        };
                    });
                    //0.0986 - gravitational constant, divided by 100 as the code it's for runs 100 times per second
                    //starting ejection force and roll angle compensation
                    /*var a = 1 - ((geofs.animation.values.aroll + 90) * 0.001) 
                    var b = 0 - (geofs.animation.values.aroll * 0.001) 
                    var c = 0
                    if (geofs.animation.values.trueKias != undefined) {
                    c = (geofs.animation.values.trueKias / 150)
                    } else {
                    c = (geofs.animation.values.kias / 150)
                    }
                    function moveCamera() {
                    //gravity pulling the camera down
                    a = a - 0.0986
                    //teleport the camera to the new calculated location - every ten ms
                    geofs.camera.translate(b, c, a)
                    //log the values for debugging
                    console.log(a)
                    console.log(b)
                    console.log(c)
                    };
                    //moving the camera
                    moveCameraInterval = setInterval(function(){moveCamera()},10)
                    //stop moving the camera when the parachute inflates
                    setTimeout(() => {clearInterval(moveCameraInterval);},2000) */
                    //NEW LOGIC
                    const totalFallTime = 2000; // ms
                    const interval = 10;        // ms
                    const g = 0.098;              // m/s²
                    // save initial LLA
                    let [startLat, startLon, startAlt] = geofs.aircraft.instance.llaLocation;

                    let t = 0; //ms spent falling

                    let b = 0 - (geofs.animation.values.aroll * 0.001);
                    let c = (geofs.animation.values.trueKias || geofs.animation.values.kias) / 800;

                    function moveCamera() {
                        t += interval; //increment fall time by 10ms
                        let seconds = t / 1000; //seconds spent falling
                        let fall = -2 * g * Math.pow(seconds, 2); // falling downward
                        //let cameraFall = fall * 0.05; // scale camera fall to match 19.6m of falling


                        geofs.camera.translate(b, c, fall);
                        
                        //console.log(fall)
                    


                        if (t >= totalFallTime) {
                            clearInterval(moveCameraInterval); //after 2 seconds of fall, stop falling and swap to paraglider
                            geofs.aircraft.instance.change(50);
                            // Apply horizontal drift
                            let deltaLat = b / 111000;
                            let deltaLon = c / (111000 * Math.cos(startLat * Math.PI / 180));
                            let deltaAlt = 19.6; //should not be based on fall, base it on (pre-fall camera position)-(post-fall camera position)

                            geofs.aircraft.instance.llaLocation = [ //update coords by adding deltas to original values, teleport paraglider into camera's position
                                startLat + deltaLat,
                                startLon + deltaLon,
                                startAlt + deltaAlt
                            ];
                            console.log("EJECTION COMPLETE");
                            let [currLat, currLon, currAlt] = geofs.aircraft.instance.llaLocation;
                            console.log("Aircraft Start Location:", startLat.toFixed(6), startLon.toFixed(6), startAlt.toFixed(2));
                            console.log("Aircraft End Location:", currLat.toFixed(6), currLon.toFixed(6), (startAlt + deltaAlt).toFixed(2));
                            let sceneFall = currAlt - startAlt;
                            console.log(`Aircraft fall: ${sceneFall.toFixed(2)} units`);                            

                        }
                    }

                    const moveCameraInterval = setInterval(moveCamera, interval);

                };
                //if you're not ejecting right now, you shouldn't be
                if (geofs.animation.values.enginesOn == 1 && ejected == 1) {
                    ejected = 0
                }
            } else {
                //if you're not in an aircraft with ejection seat, set notifiedTrue to false so you can be notified next time you hop in one :)
                notifiedEject = 0
                geofs.animation.values.eject = 1
            }
        };
        //set the whole bs on an interval so it all ticks along nicely
        ejectionInterval = setInterval(function(){checkForEjections()}, 500);
	}

runEjections();
