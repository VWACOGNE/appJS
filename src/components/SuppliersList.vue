<script>
import Supplier from "./Supplier.vue";
import axios from "axios";

export default {
  components: {Supplier},

  data() {
    return {
      suppliers: [],
      loading: true,
      errored: false,
    }

  },

  mounted() {
    axios
        .get(
            "https://heroku-campus-suppliers.herokuapp.com/api/suppliers"
        )
        .then((response) => {
          this.suppliers = response.data.data
          console.log(this.suppliers)
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
  },

}

</script>

<template>
  <Supplier
      v-for="supplier in suppliers"
      :key="supplier.id"
      :supplier="supplier"
  />
</template>