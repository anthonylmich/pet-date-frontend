<script>
export default {
  data: function () {
    return {
      user_id: localStorage.user_id,
    };
  },
};
</script>
<template>
  <!-- ======= Header ======= -->
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex justify-content-between">
      <div class="logo">
        <h1 class="text-light"><a href="index.html">Flattern</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="/assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><router-link to="/pets">All Pets</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/logout">Logout</router-link></li>
          <li><router-link to="/signup">Signup</router-link></li>
          <li><router-link to="/pets/new">New Pet</router-link></li>
          <li><router-link :to="`/users/${user_id}`">Profile</router-link></li>
          <li><router-link to="/conversations">Conversations</router-link></li>
        </ul>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->
  <div id="app"></div>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/logout">Logout</router-link>
    |
    <router-link to="/signup">Signup</router-link>
    |
    <router-link to="/pets">All Pets</router-link>
    |
    <router-link to="/pets/new">New Pet</router-link>
    |
    <router-link :to="`/users/${user_id}`">Profile</router-link>
    |
    <router-link to="/conversations">Conversations</router-link>
  </nav>
  <router-view />
</template>
