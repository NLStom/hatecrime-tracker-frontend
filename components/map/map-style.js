// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = {
    id: 'data',
    type: 'fill',
    paint: {
        'fill-color': {
            property: 'percentile',
            stops: [
                [0, '#F80B00'],
                [1, '#BA0601'],
                [2, '#7C0200'],
                [3, '#3E0100'],
                [4, '#3a0909']
            ]
        },
        'fill-opacity': 0.8
    }
};