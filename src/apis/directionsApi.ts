import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoidmdhbWEiLCJhIjoiY2xqdG0xNjhmMHl5dTNzbWlxOGVibGd0OSJ9.lH_3fYCpzkMa4gYn0UuKrA'
    }
});


export default directionsApi;