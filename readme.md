# GeoFS-V3.9_Assets

[![Version](https://img.shields.io/badge/Version-V1.0.0-f59e0b?style=flat-square&logo=files&logoColor=white)](https://github.com/amfi-disable/GeoFS-V3.9_Assets)
[![Ecosystem](https://img.shields.io/badge/GeoFS--V3.9-Ecosystem-f59e0b?style=flat-square)](https://sites.google.com/view/geofs-v39-ecosystem/home)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](license)

> Shared static assets for the GeoFS-V3.9 Ecosystem — audio, icons, 3D models, data, and styles served via CDN.

---

## Structure

```
GeoFS-V3.9_Assets/
├── _headers               # Cloudflare Pages CORS header config
├── addons/                # Per-addon binary assets (models, textures)
│   ├── maritime/
│   ├── pushback/
│   ├── realism_addon/
│   ├── scitor/
│   ├── spice9/
│   └── vehicles_addon/
├── audio/                 # GPWS callouts, ambient sounds, radio static
│   └── tylerbmusic/       # GPWS audio pack + HUD imagery + 3D models
├── data/
│   └── airports.json      # Airport reference database
├── icons/                 # Per-script userscript icons (PNG)
└── styles/                # Shared vendor CSS and JS (vanilla-notify)
```

---

## Usage

Assets are served via Cloudflare Pages CDN. Reference them in scripts using:

```js
// Icons
// @icon https://geofs-assets.evengao6688.workers.dev/icons/<script-name>.png

// Audio
const snd = new Audio('https://geofs-assets.evengao6688.workers.dev/audio/tylerbmusic/minimums.wav');
```

---

## Part of the GeoFS-V3.9 Ecosystem

*© 2026 _init. Part of the [GeoFS-V3.9_Ecosystem](https://sites.google.com/view/geofs-v39-ecosystem/home).*
