import _ from 'lodash'

const POSTS = (() => {
  const resolve = require.context("~/content/", true, /\.md$/);
  const posts = resolve.keys().map(key => {
    const [, name] = key.match(/\/(.+)\.md$/);
    return resolve(key);
  });

return  _.orderBy(posts, i => i.attributes.date, 'desc')

})()
export default POSTS

export const getLatestPost = () => {
  return POSTS[0]
}
