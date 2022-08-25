<script setup>
defineProps({
  supplier: Object,
})

</script>
<template>
  <div id="supplier-card">
<h1>{{supplier.name}}</h1>
  <h3 v-if="!supplier.status" style="color: red"> A du stock ? KO</h3>
  <h3 v-if="supplier.status" style="color: green"> A du stock ? OK</h3>
  <h5>{{supplier.checkedAt}}</h5>
  </div>
</template>
<style>
#supplier-card {

  margin: 1rem auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 1rem;
}

</style>