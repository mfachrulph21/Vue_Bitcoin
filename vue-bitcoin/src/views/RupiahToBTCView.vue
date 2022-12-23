<script>
import Navbar from "../components/Navbar.vue";
import { mapState, mapActions, mapWritableState } from "pinia";
import { useDataStore } from "../stores/data";

export default {
  name: "RupiahToBitcoin",
  components: {
    Navbar,
  },
  computed: {
    ...mapWritableState(useDataStore, ["inputNumber"]),
    ...mapState(useDataStore, ["convertedRupiahToBitcoin"]),
  },
  methods: {
    ...mapActions(useDataStore, ["rupiahConverter"]),
    rupiah(value) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(value);
    },
  },
};
</script>

<template>
  <div class="container-fluid" style="min-height: 100vh">
    <div class="row">
      <Navbar />
    </div>
    <div class="container text-align">
      <div class="d-flex justify-content-center mt-5">
        <h1>Konversi Rupiah ke Bitcoin</h1>
      </div>
      <div class="d-flex justify-content-center mt-1">
        <h5>Kurs 1 USD = 14.000 IDR</h5>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <input
          v-model="inputNumber"
          v-on:input="rupiahConverter"
          type="number"
          style="width: 600px"
        />
      </div>
      <div class="d-flex justify-content-center mt-2">
        <h5>{{ rupiah(inputNumber) }} = BTC {{ convertedRupiahToBitcoin }}</h5>
      </div>
    </div>
  </div>
</template>
