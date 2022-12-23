import { defineStore } from "pinia";
import axios from "axios";

export const useDataStore = defineStore("data", {
  state: () => {
    return {
      infoBitcoin: [],
      convertedRupiahToBitcoin: 0,
      convertedBitcoinToRupiah: 0,
      inputNumber: 0,
    };
  },
  actions: {
    async fetchInfoBitcoin() {
      try {
        let data = await axios({
          url: "https://blockchain.info/ticker",
          method: "GET",
        });

        this.infoBitcoin = data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async rupiahConverter() {
      try {
        let USDValue = this.inputNumber / 14000;

        let data = await axios({
          url: `https://blockchain.info/tobtc?currency=USD&value=${USDValue}`,
          method: "GET",
        });

        this.convertedRupiahToBitcoin = data.data;

        console.log(this.convertedBitcoinToRupiah, "ini di action");
      } catch (error) {
        console.log(error);
      }
    },

    async bitcoinConverter() {
      try {
        let data = await axios({
          url: `https://blockchain.info/tobtc?currency=USD&value=1`,
          method: "GET",
        });

        let oneUSDtoBTC = data.data;

        this.convertedBitcoinToRupiah =
          (this.inputNumber * 14000) / oneUSDtoBTC;
      } catch (error) {
        console.log(error);
      }
    },

    goToHomePage() {
      this.inputNumber = "";
      this.$router.push("/");
    },
    goToBTCToRupiahPage() {
      this.inputNumber = "";
      this.$router.push("/rupiah-to-btc");
    },
    goToRupiahToBTCPage() {
      this.inputNumber = "";
      this.$router.push("/btc-to-rupiah");
    },
  },
});
