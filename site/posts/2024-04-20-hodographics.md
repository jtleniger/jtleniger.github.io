---
title: Introducing hodo.graphics 
date: 2024-04-20T09:09:00.000Z
description: Mobile Friendly Meteorology
hero: hodographics.webp
---
# What is hodo.graphics?

[hodo.graphics](https://hodo.graphics/) is a meteorology app I've been working on. It's an atmospheric model and severe weather forecast viewer designed with storm chasers, photographers, and meteorology hobbyists in mind.

It's been under development for nearly a year at this point, and it's becoming a very usable piece of software for forecasting.

As the time of writing, it provides severe weather outlooks from the NOAA Storm Prediction Center, as well as a handful of common weather models (HRRR, NAM, RAP, and GFS).

You can view individual products, traditional maps (like a 500mb map with pressure and wind), and genereate soundings and Skew-T plots on demand.

## How is it different?

### Mobile-Friendly Design
Unlike other forecast model websites, hodo.graphics prioritizes mobile usability. The UI was designed mobile-first, and it should work well on most modern cell phones.

### Dynamic Map
Instead of static images, hodo.graphics lets you pan and zoom anywhere on the map. Other model providers generate images for each forecast hour for specific sectors, limiting the areas you can view and making it difficult to look at specific features.

## How does it work?

### Dataset Generation

1. hodo.graphics downloads model data from NOAA in the [GRIB2](https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/) format.
2. Using a combination of [wgrib2](https://www.cpc.ncep.noaa.gov/products/wesley/wgrib2/) and [GDAL](https://gdal.org/index.html), hodo.graphics extracts a subset of products, and converts them to GeoTIFF and/or GeoJSON formats, depending on the product.
3. The results are saved and made available via API.

### Client App

1. The client shows a world map, using Open Street Map, OpenLayers, and MapLibre. 
2. When a user selects a product, the client downloads the associated files.
3. The data is displayed with OpenLayers, using client side configuration.


## What's next?

- Personalization
    - Colormap preferences & Colorblind mode for accesibility
    - Unit preferences
- Improvements to soundings and Skew-T plots
    - Additional useful data like LFC and LCL
    - Ability to export charts and share them
- Archival
    - Save products from specific model runs
    - Export map views


## Try it Out! 🌦️🌪️

The app can be found at [hodo.graphics](https://hodo.graphics/).

An account is only required to generate soundings or view models other than the HRRR. Feel free to provide feedback or suggestions on [Canny](https://hodographics.canny.io/feature-requests).