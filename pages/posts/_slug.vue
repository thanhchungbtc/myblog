<template>
  <div class="post">
    <div class="container">
      <b-row>
        <b-col md="8" xs="12" offset-md="2">
          <h1 class="post-title" v-text="title"></h1>
          <div class="meta-information">Thanh Chung Bui – {{ formatDate(date) }}</div>
        </b-col>
      </b-row>
      <b-row class="content">
        <SocialButtons/>
        <b-col md="8">

          <picture>
            <img :src="thumbnail" onerror="this.src='/images/default-thumbnail.jpg'" alt=""/>
          </picture>

<!--          Content-->
<!--          <component class="mt-4" :is="singlePostComponent"/>-->
          <div class="mt-4" v-html="html"></div>

          <p class="post-meta">Published on
            <time :datetime="formatDate(date)">{{ formatDate(date) }}</time>
          </p>
          <div class="tags">
            <span>Tags:</span>
            <a href="#" v-for="(tag, idx) in tags" :key="idx">{{tag}}</a>
          </div>

          <Author/>

        </b-col>
      </b-row>

    </div>
  </div>
</template>
<script>
  import Author from "../../components/Author";
  import SocialButtons from "../../components/SocialButtons";
  import moment from 'moment'

  export default {
    components: {SocialButtons, Author},
    async asyncData({params}) {
      try {
        let post = await import(`~/content/${params.slug}/index.md`);
        return {
          html: post.html,
          title: post.attributes.title,
          date: post.attributes.date,
          tags: post.attributes.tags,
          // singlePostComponent: post.vue.component,
          thumbnail: post.attributes.thumbnail || '/images/default-thumbnail.jpg'
        };
      } catch (err) {
        console.debug(err);
        return false;
      }
    },

    data() {
      return {
        title: "",
        thumbnail: '',
        date: '',
        tags: [],
        singlePostComponent: null,
      }
    },

    methods: {
      formatDate(date) {
        return moment(date, 'YYYY-MM-DD').format('Do MMM YYYY')
      }
    }
  };
</script>
