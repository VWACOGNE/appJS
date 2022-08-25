<script setup>

import SuppliersList from "./components/SuppliersList.vue";
import SuppliersMap from "./components/SuppliersMap.vue";


function onSuppliersListClick() {
  alert("la liste des fournisseurs")
}
function onMapClick() {
  alert("afficher la carte")
}

</script>

<template>
  <header>
    <button v-on:click="onSuppliersListClick()">la liste des fournisseurs</button>
    <button v-on:click="onMapClick()">afficher la carte</button>
    <p>
      <br><router-link to="/suppliers">Go to fournisseurs</router-link>
      <br><router-link to="/map">Go to map</router-link>
<!--      <br><router-link to="/supplier">Go to supplier</router-link>-->
    </p>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
