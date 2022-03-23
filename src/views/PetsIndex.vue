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
  <body>
    <main id="main">
      <!-- ======= Blog Section ======= -->
      <section id="blog" class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-8 entries">
              <h1>All Pets</h1>
              <article class="entry" v-for="pet in pets" v-bind:key="pet.id">
                <div class="entry-img">
                  <router-link v-bind:to="`/pets/${pet.id}`">
                    <img v-bind:src="pet.img_url" v-bind:alt="pet.name" />
                  </router-link>
                </div>

                <h2 class="entry-title">
                  <a href="blog-single.html">
                    {{ pet.name }}
                  </a>
                </h2>

                <div class="entry-content">
                  <p>
                    {{ pet.description }}
                  </p>
                  <p>Owner: {{ pet.user.name }}</p>
                  <div class="read-more">
                    <router-link v-bind:to="`/pets/${pet.id}`">More details</router-link>
                  </div>
                </div>
              </article>
              <!-- End blog entry -->
            </div>
            <!-- End blog entries list -->
          </div>
        </div>
      </section>
      <!-- End Blog Section -->
    </main>
    <!-- End #main -->
    <div id="app"></div>
  </body>
</template>
