<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
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
                  <h4>Signup</h4>
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <form v-on:submit.prevent="submit()">
                    <div class="row">
                      <div class="col form-group">
                        <input type="text" v-model="newUserParams.name" class="form-control" placeholder="Your Name*" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input
                          type="location_city"
                          v-model="newUserParams.location_city"
                          class="form-control"
                          placeholder="Your Location(city)*"
                        />
                      </div>
                      <div class="col form-group">
                        <input
                          type="phone_number"
                          v-model="newUserParams.phone_number"
                          class="form-control"
                          placeholder="Your Phone Number*"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input
                          type="email"
                          v-model="newUserParams.email"
                          class="form-control"
                          placeholder="Your Email*"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input
                          type="password"
                          v-model="newUserParams.password"
                          class="form-control"
                          placeholder="Password*"
                        />
                      </div>
                      <div class="col form-group">
                        <input
                          type="password"
                          v-model="newUserParams.password_confirmation"
                          class="form-control"
                          placeholder="Password Confirmation*"
                        />
                      </div>
                    </div>
                    <button type="submit" value="Submit" class="btn btn-primary">Signup</button>
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
