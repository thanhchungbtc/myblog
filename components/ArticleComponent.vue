<template>
  <article class="d-flex flex-column pb-5">
    <div class="image">
      <nuxt-link tag="a" :to="permalink" class="text-left font-weight-bold">
        <picture>
          <img :src="thumbnail" onerror="this.src='/images/default-thumbnail.jpg'" alt=""/>
        </picture>
      </nuxt-link>
    </div>
    <h3 class="mt-3">{{ title }}</h3>
    <span class="text-right text-muted caption">{{ date }}</span>


    <p>{{ description }}</p>

    <div class="tags pt-0 mb-3 mt-0">
      <a href="#" v-for="(tag, idx) in tags" :key="idx">{{tag}}</a>
    </div>

    <nuxt-link tag="a" :to="permalink" class="text-left font-weight-bold">
      Read more
    </nuxt-link>
  </article>
</template>
<script>
  import moment from "moment";

  export default {
    name: 'ArticleComponent',
    props: ['post'],
    created() {
      console.log(this.post)
    },

    data() {
      return {
        prefix: 'posts'
      }
    },

    computed: {
      title() {
        return this.post.attributes.title
      },
      tags() {
        return this.post.attributes.tags || []
      },
      description() {
        return this.post.attributes.description
      },

      thumbnail() {
        return this.post.attributes.thumbnail || '/images/default-thumbnail.jpg'
      },

      date() {
        return moment(this.post.attributes.date, 'YYYY-MM-DD').format('Do MMM YYYY')
      },

      permalink() {
        const {post} = this
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
  }
</script>
