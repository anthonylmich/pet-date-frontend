<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      userPets: {},
    };
  },
  created: function () {
    axios.get("/users/" + localStorage.user_id).then((response) => {
      console.log("users show", response.data);
      console.log("users show", response.data.pets);
      this.user = response.data;
      this.userPets = response.data.pets;
      console.log(response.data.pets);
    });
  },
  methods: {},
};
</script>

<template>
  <div class="users-show">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <p>{{ user.location_city }}</p>
    <p>{{ user.phone_number }}</p>
    <!-- <router-link v-bind:to="`/users/${user.id}/edit`">Edit user</router-link> -->
    <!-- router link is not working yet -->
  </div>
  <h1>User Pets</h1>
  <div v-for="pet in userPets" v-bind:key="pet.id">
    <h3>{{ pet.name }}</h3>
    <img v-bind:src="pet.img_url" v-bind:alt="pet.name" />
    <p>Description: {{ pet.description }}</p>
    <p>Gender: {{ pet.gender }}</p>
    <p>Fixed?: {{ pet.fixed }}</p>
    <p>Likes: {{ pet.likes }}</p>
    <p>Dislikes: {{ pet.dislikes }}</p>
  </div>
</template>
