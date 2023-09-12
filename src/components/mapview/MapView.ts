import Mapboxgl from 'mapbox-gl';
import { defineComponent, ref, onMounted, watch } from 'vue';
import { useMapStore,usePlacesStore } from '@/composables';

export default defineComponent({
    name: 'MapView',
    setup(){
        const mapElement = ref<HTMLDivElement>()
        const {userLocation,isUserLocationReady} = usePlacesStore()
        const {setMap} = useMapStore()



        const initMap = async() =>{
            if(!mapElement.value) throw new Error('Div element no existe');
            if(!userLocation.value) throw new Error('Sin coordenadas');

            await Promise.resolve(); //dejar que el mapa carge
            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });  

            const myLocationPopup = new Mapboxgl.Popup({offset:[0,-25]})
            .setLngLat(userLocation.value)
            .setHTML(`
                <h4>Aqui estoy!</h4>
                <p>Actualmente aqui!</p>
            `)

            const myLocationMarker = new Mapboxgl.Marker()
            .setLngLat(userLocation.value)
            .addTo(map)

            setMap(map) //mandar a crear el mapa en el store
        }



        onMounted(() =>{
            if(isUserLocationReady.value) return initMap();
        })

        watch(isUserLocationReady,(newVal) =>{
            if(isUserLocationReady.value) initMap();
        })

        return{
          isUserLocationReady,
          mapElement
        }
    }
})