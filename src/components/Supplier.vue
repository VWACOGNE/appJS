<script setup>
defineProps({
  name: String,
  status: Boolean,
  checkedAt: Date,
})

</script>
<template>
<h1>{{name}}</h1>
  <h3 v-if="!status" style="color: red"> A du stock ? KO</h3>
  <h3 v-if="status" style="color: green"> A du stock ? OK</h3>
  <h5>{{checkedAt}}</h5>
</template>
