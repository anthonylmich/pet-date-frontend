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
      <h2>{{ conversation.partner }}</h2>
      <router-link v-bind:to="`/conversations/${conversation.id}`">
        <h1>{{ conversation.partner.name }}</h1>
      </router-link>
      {{ conversation.messages }}
    </div>
  </div>
</template>
