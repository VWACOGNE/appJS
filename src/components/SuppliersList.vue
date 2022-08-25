<script>
import Supplier from "./Supplier.vue";

export default {
  components: {Supplier},

  data() {
    return {
      suppliers: [
        {
          id: 1,
          name: "Fournisseur 1 ?",
          status: true,
          checkedAt: new Date()
        },
        {
          id: 2,
          name: "Fournisseur 2",
          status: false,
          checkedAt: new Date()
        }
      ]
    }
  }
}

</script>

<template>
  <Supplier
      v-for="supplier in suppliers"
      :key="supplier"
      :supplier="supplier"
  />
</template>