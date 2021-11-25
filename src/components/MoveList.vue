<template>
  <section class="move-list flex gap column" v-if="movesList">
    <h2>Your Last Transfers</h2>
    <div
      class="move-preview flex space-between align-center gap"
      v-for="(move, idx) in movesList"
      :key="idx"
      :move="move"
    >
      <div class="flex align-center gap grow">
        <img :src="require('@/assets/img/arrow.svg')" />
        <span>{{ move.name }}</span>
      </div>
      <span>${{ move.amount }}</span>
      <div class="time flex align-center">
        <span>{{ getNow(move.createdAt) }}</span>
        <img src="https://img.icons8.com/windows/32/ffffff/clock--v1.png" />
      </div>
    </div>
  </section>
</template>

<script>
import { Utils } from "@/services/utils.service";
export default {
  name: "MoveList",
  props: ["movesList"],

  data() {
    return {
      movesToShow: [],
    };
  },
  created() {
  },
  methods: {
    getNow(timestamp) {
      const today = new Date(timestamp);
      return Utils.timeSince(today);
    },
  },
 
};
</script>

<style scoped lang="scss">
img {
  height: 30px;
  width: 30px;
  background: white;
  outline: 1px solid white;
  border-radius: 50%;
  transform: rotate(-45deg);
}
.time {
  gap: 3px;
  img {
    transform: unset;
    background-color: #d3d3d321;
    outline: none;
  }
}
</style>
 