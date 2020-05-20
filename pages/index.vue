<template>
  <!--  <div>-->
  <!--    <h1>My blog posts</h1>-->
  <!--    <ul>-->
  <!--      <li v-for="post in posts" :key="post.attributes.title">-->
  <!--        <nuxt-link :to="getPermalink(post)">{{ post.attributes.title }}</nuxt-link>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </div>-->
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
        <nuxt-link to="/posts"><h2 class="mb-4"> Recent posts </h2></nuxt-link>
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
  import ArticleComponent from "../components/ArticleComponent";

  const path = require("path");
  export default {
    components: {ArticleComponent},
    async asyncData() {
      const resolve = require.context("~/content/", true, /\.md$/);
      const imports = resolve.keys().map(key => {
        const [, name] = key.match(/\/(.+)\.md$/);
        return resolve(key);
      });
      return {
        posts: imports
      };
    },
    data() {
      return {
        prefix: 'posts'
      }
    },
    methods: {
      getPermalink(post) {
        if (post.attributes.hasOwnProperty('permalink')) {
          return `${this.prefix}/${post.attributes.permalink}`;
        } else {
          return `${this.prefix}/${post.meta.resourcePath.split('\\').pop().split('/').pop().split('.')[0]}`;
        }
      }
    }
  };
</script>
