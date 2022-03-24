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
    cancelChange: function () {
      this.$router.push("/pets");
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
                  <h4>New Pet</h4>
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <form v-on:submit.prevent="createPet()">
                    <div class="row">
                      <div class="col form-group">
                        Name:
                        <input type="text" class="form-control" v-model="newPetParams.name" placeholder="Pet Name" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        Description:
                        <input
                          type="text"
                          class="form-control"
                          v-model="newPetParams.description"
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
                          v-model="newPetParams.gender"
                          placeholder="Pet Gender"
                        />
                        Image Link:
                        <input
                          type="text"
                          class="form-control"
                          v-model="newPetParams.img_url"
                          placeholder="Pet Imgage Link"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        Likes:
                        <input type="text" class="form-control" v-model="newPetParams.likes" placeholder="Pet Likes" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        Dislikes:
                        <input
                          type="text"
                          class="form-control"
                          v-model="newPetParams.dislikes"
                          placeholder="Pet Dislikes"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        Fixed?:
                        <br />
                        <p>
                          <input type="radio" id="one" value="true" v-model="newPetParams.fixed" />
                          <label for="one">True</label>
                        </p>
                        <p>
                          <input type="radio" id="two" value="false" v-model="newPetParams.fixed" />
                          <label for="two">False</label>
                        </p>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Create</button>
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
  <section id="blog" class="blog">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-8 entries">
          <article class="entry entry-single">
            <div class="entry-img">
              <img v-bind:src="newPetParams.img_url" v-bind:alt="newPetParams.name" />
            </div>

            <h2 class="entry-title">
              <a>{{ newPetParams.name }}</a>
            </h2>

            <div class="entry-content">
              <p>Description: {{ newPetParams.description }}</p>
              <p>Gender: {{ newPetParams.gender }}</p>
              <p>Fixed?: {{ newPetParams.fixed }}</p>
              <p>Likes: {{ newPetParams.likes }}</p>
              <p>Dislikes: {{ newPetParams.dislikes }}</p>
            </div>
          </article>
          <!-- End blog entry -->
        </div>
        <!-- End blog entries list -->
      </div>
    </div>
  </section>
</template>
