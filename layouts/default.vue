<template>
  <div>
    <NavBar/>
    <nuxt/>
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
  import 'font-awesome/css/font-awesome.min.css'
  import '../assets/styles.css'
  import NavBar from "../components/NavBar";
  export default {
    components: {NavBar}
  }
</script>
