import React from 'react'

import Layout from '../components/layout'
import Headshot from '../components/headshot'
import Emoji from '../components/emoji'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ textAlign: `right` }}>
      <h1 className="heading">hi, I'm Connor</h1>

      <p>
        I am a web developer based in Philadelphia.
        <br />I <Emoji symbol="💙" label="blue heart" /> React.{' '}
      </p>
      <div
        style={{
          maxWidth: `400px`,
          marginBottom: `1.45rem`,
          marginLeft: `auto`,
        }}
      >
        <Headshot />
      </div>
    </div>
  </Layout>
)

export default About
