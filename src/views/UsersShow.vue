<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
    };
  },
  created: function () {
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response);
      this.user = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="users-show">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
    <p>{{ user.location_city }}</p>
    <p>{{ user.phone_number }}</p>
    <p>{{ user.pets }}</p>
    <router-link v-bind:to="`/users/${user.id}/edit`">Edit user</router-link>
    <!-- router link is not working yet -->
  </div>
</template>
