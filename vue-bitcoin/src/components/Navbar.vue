<script>
import { mapActions } from "pinia";
import { useDataStore } from "../stores/data";
export default {
  name: "Navbar",
  methods: {
    ...mapActions(useDataStore, [
      "goToHomePage",
      "goToBTCToRupiahPage",
      "goToRupiahToBTCPage",
    ]),
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand ms-5" @click.prevent="goToHomePage">
      <img src="../assets/bitcoin.ico" style="height: 40px; width: 40px"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" @click.prevent="goToHomePage">Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="goToBTCToRupiahPage"
            >Bitcoin Converter</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="goToRupiahToBTCPage"
            >Rupiah Converter</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
