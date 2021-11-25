<template>
  <section class="contact-edit flex column gap" v-if="contactToEdit">
    <h2 v-if="isEdit">Contact Edit</h2>
    <h2 v-else>New Contact</h2>

    <div
      class="delete-contact flex align-center"
      v-if="contactToEdit._id"
      @click="removeContact(contactToEdit._id)"
    >
      <img :src="require('../assets/img/remove-icon.png')" />
    </div>

    <img
      class="profile-img"
      :src="require('../assets/img/avatar.png')"
      v-if="contactToEdit"
    />
    <form
      class="edit-form flex column gap align-start"
      @submit.prevent="saveContact"
      v-if="contactToEdit"
    >
      <div class="flex gap align-center">
        <label for="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          v-model.trim="contactToEdit.name"
        />
      </div>
      <div class="flex gap align-center">
        <label for="email">Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          v-model.trim="contactToEdit.email"
        />
      </div>
      <div class="flex gap align-center">
        <label for="phone">Phone:</label>
        <input
          id="phone"
          type="text"
          placeholder="Phone"
          v-model.trim="contactToEdit.phone"
        />
      </div>
      <button class="save-btn">Save</button>
    </form>
  </section>
</template>

<script>
import { contactService } from "../services/contactService";
import eventBus, { showUserMsg } from "../services/eventBus.service";
export default {
  name: "ContactEdit",
  data() {
    return {
      contactToEdit: null,
      isEdit: true,
    };
  },
  created() {
    this.loadContact();
  },
  methods: {
    async loadContact() {
      const { contactId } = this.$route.params;
      if (!contactId) {
        this.contactToEdit = contactService.getEmptyContact();
        this.isEdit = false;
        return;
      }

      try {
        this.contactToEdit = await contactService.get(contactId);
      } catch (err) {
        console.log(err);
        this.contactToEdit = null;
      }
    },
    saveContact() {
      eventBus.$emit("contactSaved", this.contactToEdit);
      showUserMsg("Contact Saved");
      this.$router.push("/contact");
    },
    removeContact(id) {
      eventBus.$emit("removeContact", id);
      showUserMsg("Contact Removed");
      this.$router.push("/contact");
    },
    close() {},
  },
};
</script>