<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      userPets: {},
      user_id: localStorage.user_id,
    };
  },
  created: function () {
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response.data);
      console.log("pets belonged to user", response.data.pets);
      this.user = response.data;
      this.userPets = response.data.pets;
      console.log(response.data.pets);
    });
  },
  methods: {},
};
</script>

<template>
  <main id="main">
    <!-- ======= Blog Single Section ======= -->
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-8 entries">
            <article class="entry entry-single">
              <div>
                <h2 class="entry-title">
                  <a>{{ user.name }}</a>
                </h2>
              </div>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center">
                    <i class="bi bi-person"></i>
                    <a>{{ user.email }}</a>
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="bi bi-clock"></i>
                    <a>
                      <time datetime="2020-01-01">{{ user.location_city }}</time>
                    </a>
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="bi bi-chat-dots"></i>
                    <a>{{ user.phone_number }}</a>
                  </li>
                  <li class="d-flex align-items-center">
                    <div v-if="user_id == user.id">
                      <router-link v-bind:to="`/users/${user.id}/edit`">Edit user</router-link>
                    </div>
                  </li>
                </ul>
              </div>
              <h1>User Pets</h1>
              <div class="entry-content" v-for="pet in userPets" v-bind:key="pet.id">
                <h2>{{ pet.name }}</h2>

                <blockquote>
                  <router-link v-bind:to="`/pets/${pet.id}`">
                    <img v-bind:src="pet.img_url" v-bind:alt="pet.name" />
                  </router-link>
                </blockquote>
                <h3>Description:</h3>
                <p>{{ pet.description }}</p>
                <p>Gender: {{ pet.gender }}</p>
              </div>
            </article>
            <!-- End blog entry -->
          </div>
          <!-- End blog entries list -->
        </div>
      </div>
    </section>
    <!-- End Blog Single Section -->
  </main>
  <!-- End #main -->
</template>
