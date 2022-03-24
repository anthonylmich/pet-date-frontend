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
    destroyPet: function (pet) {
      axios.delete("/pets/" + pet.id).then((response) => {
        console.log("pets destroy", response);
        this.$router.push("/pets");
      });
    },
    cancelChange: function () {
      this.$router.push("/pets/" + this.$route.params.id);
    },
  },
};
</script>

<template>
  <body>
    <main id="main">
      <section id="blog" class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-8 entries">
              <div class="blog-comments">
                <div class="reply-form">
                  <h4>Edit Pet</h4>
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <form v-on:submit.prevent="updatePet(pet)">
                    <div class="row">
                      <div class="col form-group">
                        Name:
                        <input type="text" class="form-control" v-model="editPetParams.name" placeholder="Pet Name" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        Description:
                        <input
                          type="text"
                          class="form-control"
                          v-model="editPetParams.description"
                          placeholder="Pet Description"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        Gender
                        <input
                          type="text"
                          class="form-control"
                          v-model="editPetParams.gender"
                          placeholder="Pet Gender"
                        />
                        Image Link:
                        <input
                          type="text"
                          class="form-control"
                          v-model="editPetParams.img_url"
                          placeholder="Pet Imgage Link"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        Image Link:
                        <input
                          type="text"
                          class="form-control"
                          v-model="editPetParams.img_url"
                          placeholder="Pet Imgage Link"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        Likes:
                        <input type="text" class="form-control" v-model="editPetParams.likes" placeholder="Pet Likes" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        Dislikes:
                        <input
                          type="text"
                          class="form-control"
                          v-model="editPetParams.dislikes"
                          placeholder="Pet Dislikes"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <p>
                          <input type="radio" id="one" value="true" v-model="editPetParams.fixed" />
                          <label for="one">True</label>
                        </p>
                        <p>
                          <input type="radio" id="two" value="false" v-model="editPetParams.fixed" />
                          <label for="two">False</label>
                        </p>
                      </div>
                    </div>
                    <button v-on:click="destroyPet(pet)" class="btn btn-primary">Destroy</button>
                    <button v-on:click="updatePet(pet)" class="btn btn-primary">Update</button>
                    <button v-on:click="cancelChange()" class="btn btn-primary">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
  <h1>Example Pet Show:</h1>
  <section id="blog" class="blog">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-8 entries">
          <article class="entry entry-single">
            <div class="entry-img">
              <img v-bind:src="editPetParams.img_url" v-bind:alt="editPetParams.name" />
            </div>

            <h2 class="entry-title">
              <a>{{ editPetParams.name }}</a>
            </h2>

            <div class="entry-content">
              <p>Description: {{ editPetParams.description }}</p>
              <p>Gender: {{ editPetParams.gender }}</p>
              <p>Fixed?: {{ editPetParams.fixed }}</p>
              <p>Likes: {{ editPetParams.likes }}</p>
              <p>Dislikes: {{ editPetParams.dislikes }}</p>
            </div>
          </article>
          <!-- End blog entry -->
        </div>
        <!-- End blog entries list -->
      </div>
    </div>
  </section>
</template>
