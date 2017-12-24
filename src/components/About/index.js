import React, {Component} from 'react';
import Layout from '../../layouts/BaseLayout'

class About extends Component {
  render() {
    return (
        <Layout>
          <article className="feature-image">
            <header className={"call-out"} style={{backgroundImage: `url('/type-theme/img/sample_feature_img_2.png')`}}>
              <h1 className="title">About</h1>

            </header>
            <section className="post-content">
              I am a Web developer.
            </section>
          </article>
        </Layout>
    )
  }
}

export default About