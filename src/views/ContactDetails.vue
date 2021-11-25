<template>
  <section class="contact-details flex column main-app" v-if="contact">
    <h2>Contact Details</h2>

    <div class="links-container flex align-center space-between">
      <router-link :to="`/contact`">
        <img :src="require('../assets/img/back-icon.png')" />
      </router-link>
      <router-link :to="`/contact/edit/${contact._id}`">
        <img :src="require('../assets/img/edit-icon.png')" />
      </router-link>
    </div>

    <div class="card flex column align-start" v-if="contact">
      <img :src="imgProfile" />
      <span><strong>Name: </strong>{{ contact.name }}</span>
      <span><strong>Mail: </strong>{{ contact.email }}</span>
      <span><strong>Phone: </strong>{{ contact.phone }}</span>
    </div>

    <TransferFund :contact="contact" />
    <MoveList :movesList="movesToShow" />
  </section>
</template>

<script>
import { contactService } from "../services/contactService";
import TransferFund from "@/components/TransferFund";
import MoveList from "@/components/MoveList";

export default {
  data() {
    return {
      contact: null,
      movesList: [],
      user: null,
    };
  },
  created() {
    this.loadContact();
  },
  methods: {
    async loadContact() {
      try {
        const { contactId } = this.$route.params;
        this.contact = await contactService.get(contactId);
      } catch (err) {
        console.log(err);
        this.contact = null;
      }
    },
  },
  computed: {
    loggedInUser() {
      return this.$store.state.loggedInUser;
    },
    imgProfile() {
      return this.contact.imgUrl;
    },
    movesToShow() {
      return this.loggedInUser.moves.filter(
        (move) => move.toId === this.contact._id
      );
    },
  },
  components: {
    TransferFund,
    MoveList,
  },
};
</script>