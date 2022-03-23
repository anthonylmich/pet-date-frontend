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
