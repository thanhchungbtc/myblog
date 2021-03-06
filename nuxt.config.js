const path = require("path");
var glob = require('glob');
import Mode from 'frontmatter-markdown-loader/mode'
const markdownIt = require('markdown-it');
const markdownItPrism = require('markdown-it-prism');
import 'prismjs'
import "prismjs/components/prism-clike"
import "prismjs/components/prism-php"
import "prismjs/components/prism-java"
import "prismjs/components/prism-docker"
import "prismjs/components/prism-go"
import "prismjs/components/prism-sql"
import "prismjs/components/prism-http"
import "prismjs/components/prism-apacheconf"
import "prismjs/components/prism-shell-session"
import "prismjs/components/prism-yaml"


/* https://github.com/jake-101/bael-template */
async function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, {cwd: "content"})
        .map(filepath => `${url}/${path.basename(filepath, ".md")}`);
    })
  );
}

export default async () => ({
  mode: 'spa',
  router: {
    mode: 'hash'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    // { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],

  generate: {
    routes: await getDynamicPaths({
      "/posts": "posts/**/*.md"
    })
  },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "content"),
        loader: "frontmatter-markdown-loader",
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META, Mode.HTML],
          markdownIt: markdownIt({ html: true }).use(markdownItPrism),
          vue: {
            transformAssetUrls: {
              // img: false,
            }
          }
        }
      });
    }
  },

})
