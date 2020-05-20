<template>
  <b-row class="py-5  posts">
    <b-col md="6" align-self="center">
      <div class="image">
        <nuxt-link tag="a" :to="permalink" class="text-left font-weight-bold">

          <picture>
            <img :src="thumbnail" onerror="this.src='/images/default-thumbnail.jpg'" alt=""/>
          </picture>
        </nuxt-link>
      </div>

    </b-col>
    <b-col md="5" offset-md="1">
      <article>
        <h2 class="pt-4">{{ title }}</h2>
        <p>{{ description }}</p>

        <nuxt-link tag="a" :to="permalink" class="text-left font-weight-bold">
          <b-btn variant="primary">Read more</b-btn>
        </nuxt-link>

      </article>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    name: 'LatestPost',
    props: ['post'],

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

      permalink() {
        const {post} = this
        const prefix = "posts"
        if (post.attributes.hasOwnProperty('permalink')) {
          return `${prefix}/${post.attributes.permalink}`;
        } else {
          const comps = post.meta.resourcePath.split('\\').pop().split('/')
          const lastComp = comps.pop()
          let path
          if (lastComp === 'index.md') {
            path = comps.pop()
          } else {
            path = lastComp.split('.')[0]
          }
          return `${prefix}/${path}`
        }
      }

    }
  }
</script>
