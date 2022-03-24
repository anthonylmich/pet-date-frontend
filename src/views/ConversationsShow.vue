<script>
import axios from "axios";
export default {
  data: function () {
    return {
      conversation: { partner: {} },
      messages: [],
      newMessageParams: {},
      user_id: localStorage.user_id,
      errors: [],
    };
  },
  created: function () {
    axios.get("/conversations/" + this.$route.params.id).then((response) => {
      console.log("conversations show", response.data);
      this.conversation = response.data;
      this.messages = this.conversation.messages;
      console.log(this.conversation.messages);
      this.newMessageParams = {};
    });
  },
  methods: {
    createMessage: function () {
      this.newMessageParams.conversation_id = this.$route.params.id;
      axios
        .post("/messages", this.newMessageParams)
        .then((response) => {
          console.log("messages create", response);
          this.messages.push(response.data);
          this.newMessageParams = {};
        })
        .catch((error) => {
          console.log("messages create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <!-- <div class="conversations-show">
    <h1>Conversation with {{ conversation.partner.name }}</h1>
    <div v-for="message in messages" v-bind:key="message.id">
      <h3>{{ message.content }}</h3>
    </div>
  </div>
  <div>
    <form v-on:submit.prevent="createMessage()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Content:
      <input type="text" v-model="newMessageParams.content" />
      <input type="submit" value="Create" />
    </form>
  </div> -->
  <main id="main">
    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-8 entries">
            <div class="blog-comments">
              <div v-for="message in messages" v-bind:key="message.id" id="comment-1" class="comment">
                <div class="d-flex">
                  <div class="comment-img"></div>
                  <div>
                    <!-- <h5>
                      <a if="message.user_id=partner.id">partner</a>
                    </h5> -->
                    <div>
                      <h3>{{ message.content }}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div class="reply-form">
                <form v-on:submit.prevent="createMessage()">
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        name="name"
                        v-model="newMessageParams.content"
                        class="form-control"
                        placeholder="Your Message*"
                      />
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <div id="app"></div>
</template>
