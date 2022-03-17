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
        console.log("pets index", response.data);
        this.pets = response.data;
        console.log(this.pets);
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
      <router-link v-bind:to="`/pets/${pet.id}`">
        <img v-bind:src="pet.img_url" v-bind:alt="pet.name" />
      </router-link>
      <p>{{ pet.description }}</p>
      <p>Owner: {{ pet.user.name }}</p>
      <router-link v-bind:to="`/pets/${pet.id}`">More details</router-link>
    </div>
  </div>
</template>
