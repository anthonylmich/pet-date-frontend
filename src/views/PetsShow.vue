<script>
import axios from "axios";
export default {
  data: function () {
    return {
      pet: { user: {} },
      user_id: localStorage.user_id,
    };
  },
  created: function () {
    axios.get("/pets/" + this.$route.params.id).then((response) => {
      console.log("pets show", response.data);
      this.pet = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="pets-show">
    <h2>{{ pet.name }}</h2>
    <img v-bind:src="pet.img_url" v-bind:alt="pet.name" />
    <p>Description: {{ pet.description }}</p>
    <p>Gender: {{ pet.gender }}</p>
    <p>Fixed?: {{ pet.fixed }}</p>
    <p>Likes: {{ pet.likes }}</p>
    <p>Dislikes: {{ pet.dislikes }}</p>
    <p>
      owner name:
      <router-link v-bind:to="`/users/${pet.user.id}`">{{ pet.user.name }}</router-link>
    </p>
    <p>Area located: {{ pet.user.location_city }}</p>
    <div v-if="user_id == pet.user.id">
      <router-link v-bind:to="`/pets/${pet.id}/edit`">Edit pet</router-link>
    </div>
    <!-- <router-link v-bind:to="`/pets/${pet.id}/edit`">Edit pet</router-link>
    <router-link to="/pets">Back to all pets</router-link> -->
  </div>
</template>
