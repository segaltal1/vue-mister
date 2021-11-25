<template>
  <section class="contact-filter flex align-center">
    <input
      class="search"
      @input="filter"
      type="text"
      placeholder="Search contact"
      v-model="filterBy"
      v-focuse
    />
  </section>
</template>

<script>
import focused from "@/directives/directive"
export default {
  name: "contact-filter",
  data() {
    return {
      filterBy: null,
    };
  },
  methods: {
    filter() {
      this.$emit("filterList", this.filterBy);
    },
  },
  directives:{
    focused
  }
};
</script>