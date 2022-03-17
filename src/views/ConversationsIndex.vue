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
  <div class="pets-index">
    <h1>All Conversations</h1>
    <div v-for="conversation in conversations" v-bind:key="conversation.id">
      <h2>{{ conversation }}</h2>
      <!-- <router-link v-bind:to="`/pets/${pet.id}`">
        <img v-bind:src="pet.img_url" v-bind:alt="pet.name" />
      </router-link>
      <p>{{ pet.description }}</p>
      <p>Owner: {{ pet.user.name }}</p>
      <router-link v-bind:to="`/pets/${pet.id}`">More details</router-link> -->
    </div>
  </div>
</template>
