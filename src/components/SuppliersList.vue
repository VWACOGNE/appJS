<script>
import Supplier from "./Supplier.vue";

export default {
  components: {Supplier},

  data() {
    return {
      id: 1,
      name: 'Mon fournisseur',
      status: false, // est ce qu'il y a du stock
      checkedAt: new Date() // date de la dernière mise à jour du stock
    };

  }
}

</script>

<template>
  <Supplier
      :key="id"
      :name="name"
      :status="status"
      :checkedAt="checkedAt"
  />
</template>