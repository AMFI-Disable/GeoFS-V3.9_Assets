# Changelog

All notable changes, asset additions, and structure updates for GeoFS-V3.9 Assets are documented in this file.

---

## [1.1.0] - Directory Naming And CDN Delivery Optimization

### Added
- **Lowercase Path Normalization**: Aligned all asset filenames, subdirectories, and image resources with lowercase repository naming conventions.
- **Addon Menu Integration**: Added `addonmenu.js` helper script and updated vehicle imagery assets.

### Fixed
- **CORS Header Directives**: Refined Cloudflare Pages `_headers` rules to ensure strict cross-origin resource sharing compliance across external simulator origins.

---

## [1.0.0] - Initial Production Release

Shared static asset repository for the GeoFS-V3.9 ecosystem serving audio, icons, data, and design styles via CDN.

### Added

#### Audio Assets
- **GPWS Cockpit Callouts**: High-fidelity terrain awareness, glideslope warnings, pull-up alarms, and minimums callout files.
- **Ambient Simulation Audio**: Background atmospheric cockpit audio, engine rumble, and gear movement sound effects.

#### Iconography And Visuals
- **Userscript Icon Suite**: Customized icons for each standalone module in the ecosystem.
- **HUD And Vehicle Textures**: 3D model textures and telemetry panel visual elements.

#### Data And Design Resources
- **Airport Navigation Database**: Global airport reference catalog (`airports.json`) for runway alignment and distance telemetry.
- **Vendor Styles**: Bundled notification system styles (`vanilla-notify`) and reusable glassmorphic UI components.
