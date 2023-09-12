<script lang="ts" src="./SearchResults.ts"></script>
<template>

  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
        <h5>Cargando</h5>
        <span>Espere por favor...</span>
  </div>


    <div  v-else-if="places.length > 0">
        <ul class="list-group mt-3  ">
            <li v-for="place in places" :key="place.id" :class="{'active': place.id === activePlace}" 
            @click="onPlaceClicked(place)" 
            class="list-group-item list-group-item-action">
                <h5>{{place.text}}</h5>
                <p>{{place.place_name}}</p>
                <div align="right">
                    <button class="btn btn-outline-primary btn-sm"
                    :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'"
                    @click.self="getRouteDirections(place)"
                    >
                        Direcciones
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>



<style scoped>
li {
    cursor: pointer;
}

h5{
    font-size: 15px !important;
}

p{
    font-size: 15px !important;
}

</style>