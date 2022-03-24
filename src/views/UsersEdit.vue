<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      user_id: localStorage.user_id,
      editUserParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/users/" + this.user_id).then((response) => {
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
        this.$router.push("/logout");
      });
    },
    cancelChange: function () {
      this.$router.push("/users/" + this.user_id);
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
                  <h4>Edit User</h4>
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <form v-on:submit.prevent="updateUser(User)">
                    <div class="row">
                      <div class="col form-group">
                        Name:
                        <input type="text" class="form-control" v-model="editUserParams.name" placeholder="User Name" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        Location(city):
                        <input
                          type="text"
                          class="form-control"
                          v-model="editUserParams.location_city"
                          placeholder="User Location(city)"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        Phone Number
                        <input
                          type="text"
                          class="form-control"
                          v-model="editUserParams.phone_number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <button v-on:click="destroyUser(user)" class="btn btn-primary">Destroy</button>
                    <button v-on:click="updateUser(user)" class="btn btn-primary">Update</button>
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
  <h1>Example User Info:</h1>
  <section id="blog" class="blog">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-8 entries">
          <article class="entry entry-single">
            <h2 class="entry-title">
              <a>{{ editUserParams.name }}</a>
            </h2>

            <div class="entry-content">
              <p>Likes: {{ editUserParams.location_city }}</p>
              <p>Dislikes: {{ editUserParams.phone_number }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
