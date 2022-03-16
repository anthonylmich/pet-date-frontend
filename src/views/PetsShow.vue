<script>
import axios from "axios";
export default {
  data: function () {
    return {
      pet: {},
    };
  },
  created: function () {
    axios.get("/pets/" + this.$route.params.id).then((response) => {
      console.log("pets show", response);
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
    <p>owner data: {{ pet.user }}</p>
    <router-link v-bind:to="`/pets/${pet.id}/edit`">Edit pet</router-link>
    <router-link to="/pets">Back to all pets</router-link>
  </div>
</template>
