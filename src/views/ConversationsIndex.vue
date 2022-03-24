<script>
import axios from "axios";
export default {
  data: function () {
    return {
      conversations: [],
    };
  },
  created: function () {
    this.indexConversations();
  },
  methods: {
    indexConversations: function () {
      axios.get("/conversations").then((response) => {
        console.log("conversations index", response.data);
        this.conversations = response.data;
        console.log(this.conversations);
      });
    },
  },
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
              <div class="entry-content">
                <h1>All Conversations</h1>
                <blockquote v-for="conversation in conversations" v-bind:key="conversation.id">
                  <router-link v-bind:to="`/conversations/${conversation.id}`">
                    <div class="blog-author d-flex align-items-center">
                      <div>
                        <h4>{{ conversation.partner.name }}</h4>
                        <p v-if="conversation.last_message">
                          {{ conversation.last_message.content }}
                        </p>
                        <p v-else>No Messages In Conversation</p>
                      </div>
                    </div>
                  </router-link>
                </blockquote>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <!-- End Blog Single Section -->
  </main>
</template>
