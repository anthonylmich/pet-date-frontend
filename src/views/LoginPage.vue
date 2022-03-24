<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/pets");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
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
                  <h4>Login</h4>
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <form v-on:submit.prevent="submit()">
                    <div class="row">
                      <div class="col form-group">
                        <input
                          type="email"
                          v-model="newSessionParams.email"
                          class="form-control"
                          placeholder="Your Email*"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input
                          type="password"
                          v-model="newSessionParams.password"
                          class="form-control"
                          placeholder="Your Password*"
                        />
                      </div>
                    </div>
                    <button type="submit" value="Submit" class="btn btn-primary">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
</template>
