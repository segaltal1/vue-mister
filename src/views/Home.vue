<template>
  <section class="app-home flex column align-center main-app">
    <h1>Welcome {{ user.fullname }}</h1>
    <div class="coins flex align-center gap">
      <img class="icon" :src="require('../assets/img/coins.png')" />
      <h3>Coins: {{ "$" + user.coins }}</h3>
    </div>
    <div class="flex align-center gap">
      <img class="icon" :src="require('../assets/img/bitcoin1.png')" />
      <h3>BTC: {{ bitCoin }}</h3>
    </div>
    <!-- <span class="contact-btn flex gap">
      <router-link to="/contact">Send </router-link>
      <img class="icon" :src="require('../assets/img/send.png')" />
    </span> -->

    <MoveList :movesList="lastMoves" />
  </section>
</template>

<script>
import { bitcoinService } from "../services/bitcoinService";
import MoveList from "@/components/MoveList";

export default {
  data() {
    return {
      user: null,
      bitCoin: null,
    };
  },
  created() {
    this.loadBitcoin();
    this.$store.commit({type:'setUser'})
    this.user = this.$store.state.loggedInUser;
  },
  methods: {
    async loadBitcoin() {
      const res = 0.00001591 || (await bitcoinService.getRate());
      this.bitCoin = "$" + res;
    },
  },
  computed: {
    lastMoves() {
      return this.user.moves.slice(0, 3);
    },
  },
  components: {
    MoveList,
  },
};
</script>