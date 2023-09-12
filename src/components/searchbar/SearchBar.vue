<script lang="ts" src="./SearchBar.ts"></script>

<template>
  <div class="searchbar-container searchOver ">
    <input v-model="searchTerm" class="form-control" type="text" placeholder="Buscar lugar">
    

      <SearchResults/>

   
  </div>


</template>


<style scoped>
.searchbar-container{
    position: fixed;
    top: 30px;
    left: 30px;
    background-color: white;
    z-index: 999;
    box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.6) ;
    width: 250px;
    border-radius: 10px !important;
    overflow: hidden;
    padding: 5px;
    height: 35vw;
}

.searchOver{
    overflow-y: scroll;
}
</style>