import {
  createContainer,
  query,
} from '@phenomic/preset-react-app/lib/client'
import Home from './components/Home'
import BlogPost from './components/BlogPost'


const HomeContainer = createContainer(Home, (props) => ({
      posts: query({path: "posts", limit: 2, after: props.params.after})
    })
)

const BlogPostContainer = createContainer(BlogPost, props => {
      const page = query({
        path: "posts", id: props.params.splat
      })

      return {
        page
      }
    }
);

export {
  HomeContainer,
  BlogPostContainer
}
