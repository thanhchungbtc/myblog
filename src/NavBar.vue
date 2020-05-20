<template>
  <div class="container">

  <b-row no-gutters align-v="center" class="mt-3 mb-4">

    <router-link :to="{name: 'Home'}" class="brand" href="#">Thanh Chung's blog</router-link>

    <b-row align-v="center" align-h="end" no-gutters style="flex: 1">
      <router-link :to="{name: 'Home'}" class="menu-item">Home</router-link>
      <router-link :to="{name: 'Demo'}" class="menu-item">Demo</router-link>
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

