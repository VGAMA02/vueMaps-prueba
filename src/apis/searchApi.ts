import axios from "axios";
import { accessToken } from "mapbox-gl";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit: 5,
        lenguage: 'es',
        access_token: 'pk.eyJ1IjoidmdhbWEiLCJhIjoiY2xqdG0xNjhmMHl5dTNzbWlxOGVibGd0OSJ9.lH_3fYCpzkMa4gYn0UuKrA'
    }
})

export default searchApi