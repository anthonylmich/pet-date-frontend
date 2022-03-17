<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newPetParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createPet: function () {
      axios
        .post("/pets", this.newPetParams)
        .then((response) => {
          console.log("pets create", response);
          this.$router.push("/pets");
        })
        .catch((error) => {
          console.log("pets create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="pets-new">
    <h1>New Pet</h1>
    <form v-on:submit.prevent="createPet()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newPetParams.name" />
      Description:
      <input type="text" v-model="newPetParams.description" />
      Gender:
      <input type="text" v-model="newPetParams.gender" />
      Img_url:
      <input type="text" v-model="newPetParams.img_url" />
      Likes:
      <input type="text" v-model="newPetParams.likes" />
      Dislikes:
      <input type="text" v-model="newPetParams.dislikes" />
      Fixed:
      <input type="boolean" v-model="newPetParams.fixed" />
      <input type="submit" value="Create" />
    </form>
  </div>
  <div>
    <h2>{{ newPetParams.name }}</h2>
    <img v-bind:src="newPetParams.img_url" v-bind:alt="newPetParams.name" />
    <p>Description: {{ newPetParams.description }}</p>
    <p>Gender: {{ newPetParams.gender }}</p>
    <p>Fixed?: {{ newPetParams.fixed }}</p>
    <p>Likes: {{ newPetParams.likes }}</p>
    <p>Dislikes: {{ newPetParams.dislikes }}</p>
  </div>
</template>
