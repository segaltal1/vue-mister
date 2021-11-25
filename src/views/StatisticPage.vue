<template>
  <section class="statistic-page flex column align-center main-app">
    <img class="loader"  v-if="!tradeVolume" src="@/assets/img/puff.svg" />
    <div class="chart-card flex column" v-if="tradeVolume">
      <h2>{{ tradeVolume.name }}</h2>
      <Chart :data="tradeVolume" />
    </div>
    <div class="chart-card flex column" v-if="marketPlace">
      <h2>{{ marketPlace.name }}</h2>
      <Chart :data="marketPlace" />
    </div>
  </section>
</template>

<script>
import { bitcoinService } from "../services/bitcoinService";
import Chart from "../components/Chart.vue";
export default {
  data() {
    return {
      tradeVolume: null,
      marketPlace: null,
    };
  },
  created() {
    this.loadCharts();
  },
  methods: {
    async loadCharts() {
      this.tradeVolume = await bitcoinService.getMarketPrice();
      this.marketPlace = await bitcoinService.getConfirmedTransactions();
    },
  },
  components: {
    Chart,
  },
};
</script>

<style scoped>
  .loader{
    width: 50vw;
  }
</style>