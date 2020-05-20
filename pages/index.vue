<template>
  <div class="">
    <div style="background-color: #f5f6f6;">
      <div class="container mt-4">
        <LatestPost :post="latestPost"/>
      </div>
    </div>
    <div class="container posts">
      <div class="category-link">
        <nuxt-link to="/posts"><h2 class="mb-4"> Recent posts </h2></nuxt-link>
        <b-row>
          <b-col md="6" v-for="(post, idx) in posts" :key="idx">
            <ArticleComponent :post="post"/>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<script>
  import ArticleComponent from "../components/ArticleComponent";
  import LatestPost from "./LatestPost";
  import POSTS, {getLatestPost} from "../data";

  const path = require("path");
  export default {
    components: {LatestPost, ArticleComponent},
    async asyncData() {
      return {
        posts: POSTS,
        latestPost: getLatestPost(),
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
          const comps = post.meta.resourcePath.split('\\').pop().split('/')
          const lastComp = comps.pop()
          let path
          if (lastComp === 'index.md') {
            path = comps.pop()
          } else {
            path = lastComp.split('.')[0]
          }
          return `${this.prefix}/${path}`
        }
      }
    }
  };
</script>
