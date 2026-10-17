# GeoFS-V3.9_Assets

[![Version: v1.0.0](https://img.shields.io/badge/Version-v1.0.0-blue.svg?style=flat-square&logo=git&logoColor=white)](https://github.com/AMFI-Disable/GeoFS-V3.9_Assets)
[![Ecosystem: GeoFS-V3.9](https://img.shields.io/badge/Ecosystem-GeoFS--V3.9-orange.svg?style=flat-square)](https://sites.google.com/view/geofs-v39-ecosystem/home)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](license)

> Shared static assets for the GeoFS-V3.9 Ecosystem — audio, icons, 3D models, data, and styles served via CDN.

---

## ⚖️ Educational & Fair-Play Disclaimer

> [!CAUTION]
> **IMPORTANT NOTICE & DISCLAIMER**:
> This codebase is provided strictly for educational, research, and testing purposes in authorized environments.
> Using automated assistance or unauthorized scripts in violation of platform terms of service or anti-cheat policies may lead to account penalties.
> The developers and contributors accept no responsibility or liability for misuse of this software.

---

## Structure

```text
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

## Part Of The GeoFS-V3.9 Ecosystem

*© 2026 AMFI-Disable. Part of the [GeoFS-V3.9_Ecosystem](https://sites.google.com/view/geofs-v39-ecosystem/home).*
