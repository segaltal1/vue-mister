<template>
  <section class="transfer-money flex column gap">
    <span
      >Transfer money to <strong>{{ contact.name }}</strong></span
    >
    <form
      class="trans-form flex align-center gap space-between"
      @submit.prevent="transfer"
    >
      <input
        type="number"
        min="0"
        id="amount"
        placeholder="Amount"
        v-model="amount"
      />
      <button class="send-btn flex align-center">
        <span>Send</span>
        <img class="icon" :src="require('../assets/img/send.png')" />
      </button>
    </form>
  </section>
</template>

<script>
import { showUserMsg } from "../services/eventBus.service";
import { userService } from "../services/userService";

export default {
  name: "TransferFund",
  props:{
     contact:{
       type:Object
     }
  },
  data() {``
    return {
      amount: null,
    };
  },
  methods: {
    transfer() {
      if (!this.amount) {
        showUserMsg("Enter amount", "danger");
        return
      }
      
      if (this.amount - this.loggedInUser().coins >= 0)
        showUserMsg("Not enough", "danger");
      else {
        userService.addMove(this.contact, this.amount);
        showUserMsg("Transferd complected", "success");
      }
      this.amount = null;
      this.$store.commit({ type: "setUser" });
    },
    loggedInUser() {
      return this.$store.state.loggedInUser;
    },
  },
};
</script>
 