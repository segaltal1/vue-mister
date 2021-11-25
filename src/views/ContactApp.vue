<template>
  <section class="contact-app flex gap column align-center main-app">
    <h2>Contacts</h2>
    <ContactFilter @filterList="setFilter" />
    <ContactList :contacts="contactsToShow" />
    <div v-if="contactsToShow.length < 1">No search result...</div>
  </section>
</template>

<script>
import eventBus from "../services/eventBus.service";
import ContactList from "../components/ContactList.vue";
import ContactFilter from "../components/ContactFilter.vue";

export default {
  data() {
    return {
      filterBy: null,
    };
  },
  async created() {
    eventBus.$on("contactSaved", this.saveContact);
    eventBus.$on("removeContact", this.remove);
    this.loadContacts();
  },

  methods: {
    async loadContacts() {
      await this.$store.dispatch({ type: "loadUsers" });
    },

    setFilter(filterBy) {
      this.$store.commit({ type: "setFilter", filterBy });
    },

    async saveContact(contact) {
      contact.imgUrl = this.newImgProfile;
      await this.$store.dispatch({ type: "saveContact", contact });
    },
    
    async remove(contactId) {
      await this.$store.dispatch({ type: "removeContact", id: contactId });
    },
  },
  computed: {
    contactsToShow() {
      return this.$store.getters.contactsToShow;
    },
    newImgProfile() {
      let idx = this.$store.getters.contacts.length;
      return `https://randomuser.me/api/portraits/women/${++idx}.jpg`;
    },
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>