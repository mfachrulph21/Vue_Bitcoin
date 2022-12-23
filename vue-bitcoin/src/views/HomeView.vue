<script>
import Navbar from "../components/Navbar.vue";
import { mapState, mapActions, mapWritableState } from "pinia";
import { useDataStore } from "../stores/data";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  computed: {
    ...mapState(useDataStore, ["infoBitcoin"]),
  },
  methods: {
    ...mapActions(useDataStore, ["fetchInfoBitcoin"]),
  },
  created() {
    this.fetchInfoBitcoin();
  },
};
</script>

<template>
  <div class="container-fluid" style="min-height: 100vh">
    <div class="row">
      <Navbar />
    </div>
    <div class="d-flex justify-content-center mt-5 fs-2">
      Harga Bitcoin Hari Ini
    </div>
    <div class="container w-50 mt-3 mb-5">
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">Mata Uang</th>
            <th scope="col">Harga Beli Bitcoin</th>
            <th scope="col">Harga Jual Bitcoin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(info, index) in infoBitcoin" :key="index">
            <td>{{ info.symbol }}</td>
            <td>{{ info.buy }}</td>
            <td>{{ info.sell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
