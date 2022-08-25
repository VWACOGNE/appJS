<script setup>



</script>

<template>
  <header>

    <img id="img" alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <p>Que voulez-vous faire ? :</p>
    <p>
      <br><router-link to="/suppliers">Go to fournisseurs</router-link>
      <br><router-link to="/map">Go to map</router-link>
      <!--      <br><router-link to="/supplier">Go to supplier</router-link>-->
    </p>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>



</style>
