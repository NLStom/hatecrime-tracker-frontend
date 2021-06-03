import * as React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import MapGL, { Source, Layer } from 'react-map-gl';
import ControlPanel from './map/control-panel';
import { dataLayer } from './map/map-style';
import { updatePercentiles } from './map/utils';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibmxzdG9tIiwiYSI6ImNrcGJ0eDZ0bzExMmwydm9ma2lwc211cTEifQ.NEjWhFL7Cxzmf3ctFDxmMw';

export default function App() {
    const [viewport, setViewport] = useState({
        latitude: 40,
        longitude: -100,
        zoom: 3,
        bearing: 0,
        pitch: 0
    });
    const [year, setYear] = useState(2001);
    const [allData, setAllData] = useState(null);
    const [hoverInfo, setHoverInfo] = useState(null);

    useEffect(() => {
        /* global fetch */
        fetch(
            'data.json'
        )
            .then(resp => resp.json())
            .then(json => setAllData(json));
    }, []);

    const onHover = useCallback(event => {
        const {
            features,
            srcEvent: { offsetX, offsetY }
        } = event;
        const hoveredFeature = features && features[0];

        setHoverInfo(
            hoveredFeature
                ? {
                    feature: hoveredFeature,
                    x: offsetX,
                    y: offsetY
                }
                : null
        );
    }, []);

    const data = useMemo(() => {
        return allData && updatePercentiles(allData, f => Math.floor(f.properties.income[year] / 400));
    }, [allData, year]);

    return (
        <>
            <MapGL
                {...viewport}
                width="100vw"
                height="80vh"
                mapStyle="mapbox://styles/mapbox/light-v9"
                onViewportChange={setViewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                interactiveLayerIds={['data']}
                onHover={onHover}
            >
                <Source type="geojson" data={data}>
                    <Layer {...dataLayer} />
                </Source>
                {hoverInfo && (
                    <div className="tooltip" style={{ left: hoverInfo.x, top: hoverInfo.y }}>
                        <div>State: {hoverInfo.feature.properties.name}</div>
                        <div>Hate crime incidents: {hoverInfo.feature.properties.value}</div>
                    </div>
                )}
            </MapGL>

            <ControlPanel year={year} onChange={value => setYear(value)} />
        </>
    );
}

