<script>
import axios from "axios";
export default {
  data: function () {
    return {
      pet: { user: {} },
      user_id: localStorage.user_id,
      newConversationParams: {},
      newConversation: {},
    };
  },
  created: function () {
    axios.get("/pets/" + this.$route.params.id).then((response) => {
      console.log("pets show", response.data);
      this.pet = response.data;
      this.newConversationParams.recipient_id = this.pet.user.id;
      console.log(this.newConversationParams);
    });
  },
  methods: {
    createConversation: function () {
      axios
        .post("/conversations", this.newConversationParams)
        .then((response) => {
          console.log("conversations create", response);
          this.newConversation = response.data;
          console.log(this.newConversation);
          this.$router.push("/conversations/" + this.newConversation.id);
        })
        .catch((error) => {
          console.log("conversations create error", error.response);
          this.errors = error.response;
        });
    },
  },
};
</script>

<template>
  <main id="main">
    <!-- ======= Breadcrumbs ======= -->

    <!-- End Breadcrumbs -->

    <!-- ======= Blog Single Section ======= -->
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-8 entries">
            <article class="entry entry-single">
              <div class="entry-img">
                <img v-bind:src="pet.img_url" v-bind:alt="pet.name" />
              </div>

              <h2 class="entry-title">
                <a href="blog-single.html">{{ pet.name }}</a>
              </h2>

              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center">
                    <i class="bi bi-person"></i>
                    <router-link v-bind:to="`/users/${pet.user.id}`">{{ pet.user.name }}</router-link>
                  </li>
                </ul>
              </div>

              <div class="entry-content">
                <div>
                  <button v-on:click="createConversation()">Message Owner</button>
                </div>
                <p>Description: {{ pet.description }}</p>
                <p>Gender: {{ pet.gender }}</p>
                <p>Fixed?: {{ pet.fixed }}</p>
                <p>Likes: {{ pet.likes }}</p>
                <p>Dislikes: {{ pet.dislikes }}</p>
                <p>Area located: {{ pet.user.location_city }}</p>
                <div v-if="user_id == pet.user.id">
                  <router-link v-bind:to="`/pets/${pet.id}/edit`">Edit pet</router-link>
                </div>
                <router-link to="/pets">Back to all pets</router-link>
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
