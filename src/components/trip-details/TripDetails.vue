<template>
  <div  v-if="duration != undefined" class="trip-container column">
    <div class="col">Distancia: <strong>{{distance}} kms</strong></div>
    <div class="col">Duracion: <strong>{{duration}} mins</strong></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useMapStore } from '@/composables'
export default {
name:'TripDetails',
setup(){
    const {distance,duration} = useMapStore()
    return{
        distance,duration
    }
}
}
</script>

<style scoped>
.trip-container{
    background-color: white;
    border-radius: 10px;
    bottom: 20px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    font-size: 22px;
    left: 30px;
    padding: 10px;
    position: fixed;
    width: 250px;
}
strong{
    color: #42b983;
}
</style>