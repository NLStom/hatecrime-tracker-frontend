import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibmxzdG9tIiwiYSI6ImNrcGJ0eDZ0bzExMmwydm9ma2lwc211cTEifQ.NEjWhFL7Cxzmf3ctFDxmMw';

export default function Maps() {
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 4
    });

    return (
        <ReactMapGL
            {...viewport}
            width="100vw"
            height="100vh"
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/light-v9"

        />
    );
}
