function redoPFDSHUDS() {
//Corrected HUD
instruments.definitions.correctHUD = {
        "overlay": {
          "url": "images/instruments/hud/frame.png",
          "size": {"x": 400, "y": 400},
          "anchor": {"x": 200, "y": 200},
          "position": {"x": 0, "y": 0},
          "drawOrder": 1,
          "rescale": true,
          "rescalePosition": true,
          "overlays": [{
            "animations": [{
                "type": "rotate",
                "value": "aroll",
                "ratio": -1,
                "min": -180,
                "max": 180
              },
              {
                "type": "translateY",
                "value": "atilt",
                "ratio": -18.138,
                "offset": 1905,
                "min": -90,
                "max": 90
              }
            ],
            "url": "images/instruments/hud/attitude.png",
            "anchor": {"x": 54, "y": 100},
            "size": {"x": 250, "y": 420},
            "position": {"x": 0, "y": 0},
            "drawOrder": 0,
            "iconFrame": {"x": 108, "y": 200}
          },
          {
            "animations": [
              {
                "type": "translateY",
                "value": "kias",
                "ratio": 2.1,
                "offset": 10,
                "min": 0,
                "max": 1200
              }
            ],
            "url": "images/instruments/hud/kias.png",
            "anchor": {"x": 0, "y": 100},
            "size": {"x": 80, "y": null},
            "position": {"x": -210, "y": 20},
            "iconFrame": {"x": 40, "y": 160},
            "drawOrder": 1
          },
          {
            "animations": [
              {
                "type": "translateY",
                "value": "altThousands",
                "ratio": 0.2385,
                "offset": 280,
                "min": 0,
                "max": 100000
              }
            ],
            "url": "images/instruments/hud/altitude.png",
            "anchor": {"x": 0, "y": 0},
            "size": {"x": 50, "y": null},
            "position": {"x": 170, "y": -150},
            "iconFrame": {"x": 32, "y": 170},
            "drawOrder": 1
          },
          {
            "animations": [
              {
                "type": "translateY",
                "value": "altThousands",
                "ratio": 0.238,
                "offset": 95,
                "min": 0,
                "max": 100000
              },
              {
                "type": "translateX",
                "value": "altTensShift",
                "ratio": -22.7,
                "min": 0,
                "max": 100000
              }
            ],
            "name": "altten",
            "url": "images/instruments/hud/altitudetens.png",
            "anchor": {"x": 0, "y": 0},
            "size": {"x": 334, "y": 200},
            "position": {"x": 155, "y": -150},
            "iconFrame": {"x": 15, "y": 170},
            "drawOrder": 1
          },
          {
            "animations": [
              {
                "type": "translateX",
                "value": "heading360",
                "ratio": -2.64,
                "offset": 12
              }
            ],
            "url": "images/instruments/hud/compass.png",
            "anchor": {"x": 0, "y": 0},
            "size": {"x": 2000, "y": null},
            "offset": {"x": 0, "y": -10},
            "position": {"x": -170, "y": -270},
            "iconFrame": {"x": 200, "y": 30},
            "drawOrder": 1
          },
          {
            "animations": [
              {
                "type": "translateY",
                "value": "machUnits",
                "ratio": 23,
                "offset": 1
              }
            ],
            "url": "images/instruments/hud/digits.png",
            "anchor": {"x": 0, "y": 0},
            "size": {"x": 11, "y": null},
            "position": {"x": -155, "y": -202},
            "iconFrame": {"x": 11, "y": 23},
            "drawOrder": 2
          },
          {
            "animations": [
              {
                "type": "translateY",
                "value": "machTenth",
                "ratio": 23,
                "offset": 1
              }
            ],
            "url": "images/instruments/hud/digits.png",
            "anchor": {"x": 0, "y": 0},
            "size": {"x": 11, "y": null},
            "position": {"x": -141, "y": -202},
            "iconFrame": {"x": 11, "y": 23},
            "drawOrder": 2
          },
          {
            "animations": [
              {
                "type": "translateY",
                "value": "machHundredth",
                "ratio": 23,
                "offset": 1
              }
            ],
            "url": "images/instruments/hud/digits.png",
            "anchor": {"x": 0, "y": 0},
            "size": {"x": 11, "y": null},
            "position": {"x": -131, "y": -202},
            "iconFrame": {"x": 11, "y": 23},
            "drawOrder": 2
          }
          ]
        }
        }
		  
instruments.definitions.correctPFD = {
            "overlay": {
                "url": "images/instruments/a380pfd/a380pfd.png",
                "size": {"x": 200, "y": 200},
                "anchor": {"x": 256, "y": 256},
                "position": {"x": 0, "y": 0},
                "drawOrder": 1,
                "rescale": true,
                "rescalePosition": true,
                "overlays": [{
                    "animations": [{
                        "type": "rotate",
                        "value": "aroll",
                        "ratio": -1,
                        "min": -180,
                        "max": 180
                    },
                        {
                            "type": "translateY",
                            "value": "atilt",
                            "ratio": -2,
                            "offset": 330,
                            "min": -90,
                            "max": 90
                        }
                    ],
                    "url": "images/instruments/attitude-jet-hand.png",
                    "anchor": {"x": 100, "y": 70},
                    "size": {"x": 180, "y": null},
                    "position": {"x": -16, "y": 8},
                    "drawOrder": 0,
                    "iconFrame": {"x": 200, "y": 140}
                },
                    {
                        "animations": [
                            {
                                "type": "translateY",
                                "value": "kias",
                                "ratio": 2.1,
                                "offset": 0,
                                "min": 0,
                                "max": 1200
                            }
                        ],
                        "url": "images/instruments/a380pfd/kias.png",
                        "anchor": {"x": 0, "y": 100},
                        "size": {"x": 30, "y": 100},
                        "position": {"x": -98, "y": 14},
                        "iconFrame": {"x": 40, "y": 170},
                        "drawOrder": 1
                    },
                    {
            "animations": [
              {
                "type": "translateY",
                "value": "altThousands",
                "ratio": 0.2385,
                "offset": 280,
                "min": 0,
                "max": 100000
              }
            ],                        "url": "images/instruments/a380pfd/altitude.png",
                        "anchor": {"x": 0, "y": 0},
                        "size": {"x": 15, "y": null},
                        "position": {"x": 51, "y": -44},
                        "iconFrame": {"x": 32, "y": 220},
                        "drawOrder": 1
                    },
                    {
            "animations": [
              {
                "type": "translateY",
                "value": "altThousands",
                "ratio": 0.238,
                "offset": 95,
                "min": 0,
                "max": 100000
              },
              {
                "type": "translateX",
                "value": "altTensShift",
                "ratio": -22.7,
                "min": 0,
                "max": 100000
              }
            ],
                        "name": "altten",
                        "url": "images/instruments/a380pfd/altitudetens.png",
                        "anchor": {"x": 0, "y": 0},
                        "size": {"x": 100, "y": null},
                        "position": {"x": 47, "y": -44},
                        "iconFrame": {"x": 10, "y": 220},
                        "drawOrder": 1
                    },          {
                        "animations": [
                            {
                                "type": "rotate",
                                "value": "climbrate",
                            "ratio": -1,
                            "offset": 0,
                            "min": -25,
                            "max": 25
                            },
                            {
                                "type": "scaleX",
                                "value": "climbrate",
                                "ratio": 0.005,
                                "offset": 0,
                                "min": 1500,
                                "max": 5000
                            },
                            {
                                "type": "moveY",
                                "value": "climbrate",
                                "ratio": 0.022,
                                "offset": 0,
                                "min": -2250,
                                "max": 2250
                            }
                        ],
                        "url": "images/instruments/a380pfd/vario.png",
                        "anchor": {"x": 50, "y": 2},
                        "size": {"x": 10, "y": 2},
                        "position": {"x": 90, "y": 7},
                        "drawOrder": 1
                    },
                    {
                        "url": "images/instruments/a380pfd/altitude-mask.png",
                        "anchor": {"x": 0, "y": 0},
                        "size": {"x": 30, "y": null},
                        "position": {"x": 43, "y": -1},
                        "drawOrder": 1
                    },
                    {
                        "animations": [
                            {
                                "type": "translateY",
                                "value": "altitude",
                            "ratio": 0.83,
                            "offset": 0
                            }
                        ],
                        "url": "images/instruments/a380pfd/tenfeet.png",
                        "anchor": {"x": 0, "y": 0},
                        "size": {"x": 9, "y": null},
                        "position": {"x": 62, "y": 1},
                        "iconFrame": {"x": 20, "y": 35},
                        "drawOrder": 2
                    },
                    {
                        "animations": [
                            {
                                "type": "translateY",
                                "value": "altitude",
                            "ratio": 23,
                            "offset": 0
                            }
                        ],
                        "url": "images/instruments/a380pfd/digits.png",
                        "anchor": {"x": 0, "y": 0},
                        "size": {"x": 6, "y": null},
                        "position": {"x": 55, "y": 2},
                        "iconFrame": {"x": 11, "y": 23},
                        "drawOrder": 2
                    },
                    {
                        "animations": [
                            {
                                "type": "translateY",
                                "value": "altitude",
                            "ratio": 23,
                            "offset": 0
                            }
                        ],
                        "url": "images/instruments/a380pfd/digits.png",
                        "anchor": {"x": 0, "y": 0},
                        "size": {"x": 6, "y": null},
                        "position": {"x": 50, "y": 2},
                        "iconFrame": {"x": 11, "y": 23},
                        "drawOrder": 2
                    },
                    {
                        "animations": [
                            {
                                "type": "translateY",
                                "value": "altitude",
                            "ratio": 23,
                            "offset": 5
                            }
                        ],
                        "url": "images/instruments/a380pfd/digits.png",
                        "anchor": {"x": 0, "y": 0},
                        "size": {"x": 6, "y": null},
                        "position": {"x": 45, "y": 2},
                        "iconFrame": {"x": 11, "y": 23},
                        "drawOrder": 2
                    },
                    {
                        "animations": [
                            {
                                "type": "translateX",
                                "value": "heading360",
                                "ratio": -2.64,
                                "offset": 0
                            }
                        ],
                        "url": "images/instruments/a380pfd/compass.png",
                        "anchor": {"x": 0, "y": 0},
                        "size": {"x": 600, "y": null},
                        "position": {"x": -60, "y": -87},
                        "iconFrame": {"x": 160, "y": 25},
                        "drawOrder": 1
                    }
                ]
            }
        }

function changeInstruments() {
//F15 HUD fix (as a test)
if (geofs.aircraft.instance.id == 3591) {
delete geofs.aircraft.instance.setup.instruments.hud
geofs.aircraft.instance.setup.instruments.correctHUD = {
            "cockpit": {
                "position": [-0.05, 8.5, 1.05],
                "scale": 1.75
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
//Everything else lol
if (geofs.aircraft.instance.id == 240) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.52965,31.36813,1.08383],
                "scale": 1.5
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2418) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.57, 12, 0.1],
                "scale": 1.2
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 242) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.546,18.51415,0.72355],
                "scale": 1.9
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 244) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.546,25.03257,0.62188],
                "scale": 1.8
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 252) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.53064,30.23696,4.0583],
                "scale": 1.4
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 1069) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.30208,0.51526,0.25062],
                "scale": 1.1
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2153) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.54599,32.59497,1.84779],
                "scale": 1.8
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2386) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.54926,26.01962,0.13275],
                "scale": 1.8
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
   delete geofs.aircraft.instance.setup.instruments.hud
	geofs.aircraft.instance.setup.instruments.correctHUD = {
            "cockpit": {
                "position": [-0.56,25.73533,0.715],
                "scale": 0.6
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2395) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.54926,26.01962,0.13275],
                "scale": 1.8
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2706) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.45408, 11.9701, 0.681677],
                "scale": 1.4
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2726) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.35, 6.4, 0.3],
                "scale": 1.8
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2752) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-9.09, 5.2, 0.13],
                "scale": 0.85
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2769 || geofs.aircraft.instance.id == 2772 || geofs.aircraft.instance.id == 3011 || geofs.aircraft.instance.id == 3054) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.424992, 16.1147, -0.242363],
                "scale": 1
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2843 || geofs.aircraft.instance.id == 2899) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.837627, 16.825, 0.103036],
                "scale": 2.3
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2856) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.455773, 19.3115, 1.02097],
                "scale": 1.4
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2857) {
   delete geofs.aircraft.instance.setup.instruments.hud
	geofs.aircraft.instance.setup.instruments.correctHUD = {
            "cockpit": {
                "position": [-0.01, 6.9, 1],
                "scale": 1.25
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2865 || geofs.aircraft.instance.id == 2870 || geofs.aircraft.instance.id == 2871 || geofs.aircraft.instance.id == 3534) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.583134, 15.3663, -0.163568],
                "scale": 1.3
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2892) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.464142, 7.22282, 0.294906],
                "scale": 1.4
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2899 || geofs.aircraft.instance.id == 2843) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.837627, 16.825, 0.103036],
                "scale": 2.3
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2943) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.48628, 6.54231, 0.455808],
                "scale": 0.98
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 2976) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.332293, 2.86291, 0.220605],
                "scale": 1.2
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 3036) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.466778, 14.5128, 0.395157],
                "scale": 1.38
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 3049) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.78, 30.5, 1.4],
                "scale": 0.75
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 3109) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.366541, 6.87977, 0.131784],
                "scale": 1.47
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 3140 || geofs.aircraft.instance.id == 2879 || geofs.aircraft.instance.id == 2878) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.366541, 6.87977, 0.131784],
                "scale": 1.47
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 3179 || geofs.aircraft.instance.id == 3180) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.522624, 29.9254, 0.305779],
                "scale": 1.4
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 3289) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.185896, 4.44587, 0.011228],
                "scale": 1.1
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 3292) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.424992, 16.1147, -0.242363],
                "scale": 1.2
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 3307) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.7, 13.9, 0.1],
                "scale": 2.5
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 3341) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [0, 7, 0.6],
                "scale": 2.5
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 3534) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.583134, 15.3663, -0.163568],
                "scale": 1.7
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 4017) {
   delete geofs.aircraft.instance.setup.instruments.pfd
	geofs.aircraft.instance.setup.instruments.correctPFD = {
            "cockpit": {
                "position": [-0.351708, 14.6188, 0.141917],
                "scale": 0.95
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
if (geofs.aircraft.instance.id == 4172) {
   delete geofs.aircraft.instance.setup.instruments.hud
	geofs.aircraft.instance.setup.instruments.correctHUD = {
            "cockpit": {
                "position": [0.001545 , 3.95034, 0.407535],
                "scale": 0.5
            },
            "animations": [
                {"value": "view", "type": "show", "eq": "cockpit"}
            ]
	}
instruments.init(geofs.aircraft.instance.setup.instruments)
}
}
//add PFD to B-2 Spirit
//add HUD to A400M
//Also, add RNAV instruments to airliners and GA aircraft while we're at it.
changeInstruments()
var id = null;
function checkChange() {
   id = geofs.aircraft.instance.id
   setTimeout(() => {
if (geofs.aircraft.instance.id != id) {
   changeInstruments()
}
	},4000)
}
setInterval(function(){checkChange()},5000)
}
