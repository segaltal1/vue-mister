<template>
  <section class="contact-list flex column align-center gap">
    <div class="contact" v-for="(contact, idx) in contacts" :key="idx">
      <ContactPreview :contact="contact" />
    </div>
    <div class="add-btn">
      <router-link :to="`/contact/edit`">
        <img :src="require('../assets/img/add.svg')" />
      </router-link>
    </div>
  </section>
</template>

<script>
import ContactPreview from "../components/ContactPreview.vue";

export default {
  name: "ContactList",
  props: ["contacts"],
  data() {
    return {};
  },
  methods: {},
  components: {
    ContactPreview,
  },
};
</script>
<style  scoped>
img {
  border-radius: 50%;
  outline: 1px solid whitesmoke;
  box-shadow: rgba(0, 0, 0, 0) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
</style>