const POSTS = (() => {
  const resolve = require.context("~/content/", true, /\.md$/);
  return resolve.keys().map(key => {
    const [, name] = key.match(/\/(.+)\.md$/);
    return resolve(key);
  });
})()
export default POSTS

export const getLatestPost = () => {
  return POSTS[0]
}
