<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      editUserParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response);
      this.user = response.data;
      this.editUserParams = this.user;
    });
  },
  methods: {
    updateUser: function (user) {
      axios
        .patch("/users/" + user.id, this.editUserParams)
        .then((response) => {
          console.log("users update", response);
          this.$router.push("/users/" + this.$route.params.id);
        })
        .catch((error) => {
          console.log("users update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyUser: function (user) {
      axios.delete("/users/" + user.id).then((response) => {
        console.log("users destroy", response);
        this.$router.push("/users");
      });
    },
  },
};
</script>

<template>
  <div class="users-edit">
    <h1>Edit User</h1>
    <form v-on:submit.prevent="updateUser(user)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="editUserParams.name" />
      Location:
      <input type="text" v-model="editUserParams.location_city" />
      Phone Number:
      <input type="text" v-model="editUserParams.phone_number" />
      <div>
        <button v-on:click="destroyUser(user)">Destroy user</button>
        <button v-on:click="updateUser(user)">Update user</button>
      </div>
    </form>
  </div>
  <h1>Example User Show:</h1>
  <div>
    <h2>{{ editUserParams.name }}</h2>
    <img v-bind:src="editUserParams.img_url" v-bind:alt="editUserParams.name" />
    <p>Location: {{ editUserParams.location_city }}</p>
    <p>Phone Number: {{ editUserParams.phone_number }}</p>
  </div>
</template>
