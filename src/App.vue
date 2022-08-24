<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

function onSuppliersListClick() {
  alert("la liste des fournisseurs")
};
function onMapClick() {
  alert("afficher la carte")
};




</script>

<template>
  <header>
    <button v-on:click="onSuppliersListClick()">la liste des fournisseurs</button>
    <button v-on:click="onMapClick()">afficher la carte</button>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
  </main>
</template>

<style scoped>

</style>
