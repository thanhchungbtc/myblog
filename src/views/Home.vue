<template>
  <div class="">
    <div style="background-color: #f5f6f6;">
      <div class="container mt-4">
        <b-row class="py-5  latest-post">
          <b-col md="6" align-self="center">
            <picture>
              <img src="/images/container-ship.jpg" alt=""/>
            </picture>
          </b-col>
          <b-col md="5" offset-md="1">
            <article>
              <h2 class="pt-4">Create VPC</h2>
              <p>We published the first blog post five years ago, on May 9th, 2015. This was the time when we were
                writing our first book Amazon Web Services in Action. Since th</p>

              <b-btn variant="primary">Read more</b-btn>

            </article>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="container posts">
      <div class="category-link">
        <router-link :to="{name: 'Posts'}"><h2 class="mb-4"> Recent posts </h2></router-link>
        <b-row>
          <b-col md="6">
            <ArticleComponent/>
          </b-col>
          <b-col md="6">
            <ArticleComponent/>
          </b-col>
          <b-col md="6">
            <ArticleComponent/>
          </b-col>
          <b-col md="6">
            <ArticleComponent/>
          </b-col>
          <b-col md="6">
            <ArticleComponent/>
          </b-col>


        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  import ArticleComponent from "@/views/ArticleComponent";

  export default {
    name: 'Home',
    components: {ArticleComponent}
  }
</script>

<style scoped>
  .header {
    color: #f1493b;
    font-weight: 700;
    font-size: 26px;
  }

  .title {
    color: #000;
    font-weight: 700;
    font-size: 25px;
  }
</style>
