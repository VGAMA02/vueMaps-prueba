<template>
  <button v-if="isBtnReady" @click="onMyLocationClicked" class="btn btn-primary">
    Ir a mi ubicacion
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useMapStore, usePlacesStore } from '@/composables';
export default {
    name:'MyLocationBtn',
    setup(){
       const {userLocation,isUserLocationReady} = usePlacesStore()
       const {map,isMapReady} = useMapStore()
        return{
          isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady.value),
          onMyLocationClicked: () => {
            map.value?.flyTo({
              center: userLocation.value,
              zoom: 14
            })
          }


        }
    }
}
</script>

<style scoped>
button{
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>