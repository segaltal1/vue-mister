<template>
  <section>
    <HeaderApp />
    <hr class="rounded" />
    <router-view />
    <UserMsg />
  </section>
</template>

<script>
import HeaderApp from "@/components/HeaderApp";
import UserMsg from "@/components/UserMsg.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    UserMsg,
  },
  created() {
    this.$store.commit({ type: "setUser" });
  },
};
</script>
