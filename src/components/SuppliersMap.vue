<script>
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
  },
  data() {
    return {
      zoom: 2,
      iconWidth: 25,
      iconHeight: 40,
      suppliers: [],
      loading: true,
      errored: false,
    };
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
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  methods: {
    log(a) {
      console.log(a);
    },
    changeIcon() {
      this.iconWidth += 2;
      if (this.iconWidth > this.iconHeight) {
        this.iconWidth = Math.floor(this.iconHeight / 2);
      }
    },
  },
};
</script>
  <template>
    <h1>Carte des fournisseurs</h1>
    <div style="height: 75vh; width: 50vw;">
      <l-map
          v-model="zoom"
          v-model:zoom="zoom"
          :center="[47.41322, -1.219482]"
          @move="log('move')">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-control-layers />
        <l-marker v-for="supplier in suppliers" :lat-lng="[supplier.latitude, supplier.longitude]" draggable @moveend="log('moveend')">
          <l-tooltip>
            {{supplier.name}}
          </l-tooltip>
        </l-marker>
      </l-map>
    </div>
  </template>