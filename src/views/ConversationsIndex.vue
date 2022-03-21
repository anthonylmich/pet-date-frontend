<script>
import axios from "axios";
export default {
  data: function () {
    return {
      conversations: [],
    };
  },
  created: function () {
    this.indexConversations();
  },
  methods: {
    indexConversations: function () {
      axios.get("/conversations").then((response) => {
        console.log("conversations index", response.data);
        this.conversations = response.data;
        console.log(this.conversations);
      });
    },
  },
};
</script>

<template>
  <div class="conversations-index">
    <h1>All Conversations</h1>
    <div v-for="conversation in conversations" v-bind:key="conversation.id">
      <!-- <h2>{{ conversation.partner }}</h2> -->
      <router-link v-bind:to="`/conversations/${conversation.id}`">
        <h1>Conversation with {{ conversation.partner.name }}</h1>
      </router-link>
      <p v-if="conversation.last_message">
        {{ conversation.last_message.content }}
      </p>
      <p v-else>No Messages In Conversation</p>
    </div>
  </div>
</template>
