<template>
  <div>
    <NavBar/>
    <router-view/>
    <footer class="footer">
      <div class="container">
        <b-row no-gutters align-h="between">
          <span>© 2020 Thanh Chung Bui</span>
          <div>
            <a target="_blank" rel="noopener" title="Go to GitHub" href="https://github.com/thanhchungbtc">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        </b-row>
      </div>
    </footer>
  </div>
</template>

<script>
  import NavBar from "@/NavBar";

  export default {
    components: {NavBar}
  }
</script>