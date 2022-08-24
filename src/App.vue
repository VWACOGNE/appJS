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
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <SuppliersList/>
    <SuppliersMap/>
  </main>
</template>

<style scoped>

</style>
