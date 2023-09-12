import MapView from '@/components/mapview/MapView.vue';
<script lang="ts" src="./MapView.ts"></script>

<template>
  <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h3>Espere por favor</h3>
      <span>Localizando...</span>
    </div>
  </div>

  <div v-show="isUserLocationReady" ref="mapElement" class="map-container">
  
  </div>

</template>

  


<style scoped>
.map-container{
  height: 100vh;
  position: fixed;
  width: 100vw;
}

.loading-map{
  background: rgba(0, 0, 0,0.8);
  color: white;
  height: 100vh;
  position: fixed;
  width: 100vw;
  z-index: 9999;
}
</style>