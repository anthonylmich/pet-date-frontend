<script>
import axios from "axios";
export default {
  data: function () {
    return {
      conversation: {},
      messages: [],
      newMessagesParams: {},
      user_id: localStorage.user_id,
      errors: [],
    };
  },
  created: function () {
    axios.get("/conversations/" + this.$route.params.id).then((response) => {
      console.log("conversations show", response.data);
      this.conversation = response.data;
      this.messages = response.data.messages;
      this.newMessageParams = response.data.id;
    });
  },
  methods: {
    createMessage: function () {
      axios
        .post("/messages", this.newMessageParams)
        .then((response) => {
          console.log("messages create", response);
        })
        .catch((error) => {
          console.log("messages create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="conversations-show">
    <h1>Conversation with {{ conversation.partner.name }}</h1>
    <div v-for="message in messages" v-bind:key="message.id">
      <h3>{{ message.content }}</h3>
    </div>
    <p>{{ this.newMessageParams }}</p>
  </div>
  <div>
    <form v-on:submit.prevent="createMessage()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Content:
      <input type="text" v-model="newMessageParams.content" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>
