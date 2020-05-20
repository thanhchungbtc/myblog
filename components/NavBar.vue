<template>
  <div class="container">

  <b-row no-gutters align-v="center" class="mt-4 mb-4">

    <nuxt-link to="/" class="brand" href="#">Thanh Chung's blog</nuxt-link>

    <b-row align-v="center" align-h="end" no-gutters style="flex: 1">
      <nuxt-link to="/" class="menu-item">Home</nuxt-link>
      <nuxt-link to="/demo" class="menu-item">Demo</nuxt-link>
    </b-row>

  </b-row>
  </div>
</template>
<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .brand {
    font-size: 24px;
    font-weight: 500;
    color: #f1493b !important;
  }

  a:hover {
    text-decoration: underline;
    color: #d11000;
  }

  .menu-item {
    padding: 0 15px;
    color: inherit;
  }

</style>

