<script>
import axios from "axios";

export default {
  created: function () {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    this.$router.push("/pets");
  },
};
</script>

<template>
  <div class="logout"></div>
</template>
