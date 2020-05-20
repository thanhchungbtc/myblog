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
          <component :is="singlePostComponent"/>

          <p>

            <img src="/images/container-ship.jpg" alt=""/>
          </p>

          <p class="post-meta">Published on
            <time :datetime="formatDate(date)">{{ formatDate(date) }}</time>
          </p>
          <div class="tags">
            <span>Tags:</span>
            <a href="/tag/aws/" title="aws">aws</a>
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
        let post = await import(`~/content/${params.slug}.md`);
        console.log(post)
        return {
          title: post.attributes.title,
          date: post.attributes.date,
          tags: post.attributes.tags,
          singlePostComponent: post.vue.component
        };
      } catch (err) {
        console.debug(err);
        return false;
      }
    },

    methods: {
      formatDate(date) {
        return moment(date, 'YYYY/MM/DD').format('Do MMM YYYY')
      }
    }
  };
</script>
