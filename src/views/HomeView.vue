<template>
  
  <MapView />
  <MyLocationBtnVue />

  <SearchBarVue />
  <TripDetailsVue />

</template>

<script lang="ts">

import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

import MapView from '@/components/mapview/MapView.vue';
import MyLocationBtnVue from '@/components/my-location-btn/MyLocationBtn.vue';
import SearchBarVue from '@/components/searchbar/SearchBar.vue';
import TripDetailsVue from '@/components/trip-details/TripDetails.vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    MapView,
    MyLocationBtnVue,
    SearchBarVue,
    TripDetailsVue
  },
  setup(){
    usePlacesStore()
  }
});
</script>
