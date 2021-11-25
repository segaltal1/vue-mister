<template>
  <section class="contact-preview" v-if="contact">
    <router-link :to="`/contact/${contact._id}`">
      <div class="preview-contect flex align-center">
        <!-- <img :src="require('../assets/img/avatar.png')" /> -->
        <img  :src="imgProfile" />
        <span class="contact-name">{{ contact.name }}</span>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  props: ["contact"],
  data() {
    return {};
  },
  computed: {
    imgProfile() {
      // const randomIdx=  Math.floor(Math.random() * (1 + 50) + 1);
      // return `https://randomuser.me/api/portraits/women/${randomIdx}.jpg`
      return this.contact.imgUrl
    },
  },
};
</script>