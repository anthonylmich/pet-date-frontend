<script>
import axios from "axios";
export default {
  data: function () {
    return {
      pet: {},
      editPetParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/pets/" + this.$route.params.id).then((response) => {
      console.log("pets show", response);
      this.pet = response.data;
      this.editPetParams = this.pet;
    });
  },
  methods: {
    updatePet: function (pet) {
      axios
        .patch("/pets/" + pet.id, this.editPetParams)
        .then((response) => {
          console.log("pets update", response);
          this.$router.push("/pets");
        })
        .catch((error) => {
          console.log("pets update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyPhoto: function (photo) {
      axios.delete("/photos/" + photo.id).then((response) => {
        console.log("photos destroy", response);
        this.$router.push("/photos");
      });
    },
  },
};
</script>

<template>
  <div class="pets-edit">
    <h1>Edit Pet</h1>
    <form v-on:submit.prevent="updatePet(pet)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="editPetParams.name" />
      Description:
      <input type="text" v-model="editPetParams.description" />
      Gender:
      <input type="text" v-model="editPetParams.gender" />
      Img_url:
      <input type="text" v-model="editPetParams.img_url" />
      Likes:
      <input type="text" v-model="editPetParams.likes" />
      Dislikes:
      <input type="text" v-model="editPetParams.dislikes" />
      Fixed:
      <input type="boolean" v-model="editPetParams.fixed" />
      <input type="submit" value="Update" />
      <button v-on:click="destroyPhoto(photo)">Destroy photo</button>
    </form>
  </div>
</template>
