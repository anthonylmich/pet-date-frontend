<script>
import axios from "axios";
export default {
  data: function () {
    return {
      pets: [],
    };
  },
  created: function () {
    this.indexPets();
  },
  methods: {
    indexPets: function () {
      axios.get("/pets").then((response) => {
        console.log("pets index", response);
        this.pets = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="pets-index">
    <h1>All Pets</h1>
    <div v-for="pet in pets" v-bind:key="pet.id">
      <h2>{{ pet.name }}</h2>
      <img v-bind:src="pet.img_url" v-bind:alt="pet.name" />
      <p>{{ pet.description }}</p>
      <p>{{ pet.user }}</p>
      <router-link v-bind:to="`/pets/${pet.id}`">More details</router-link>
    </div>
  </div>
</template>
