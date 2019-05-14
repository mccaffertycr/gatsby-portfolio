import React from 'react'

import Layout from '../components/layout'
import Headshot from '../components/headshot'
import Emoji from '../components/emoji'
import SEO from '../components/seo'

const About = () => (
  <Layout>
    <SEO title="about" keywords={[`gatsby`, `application`, `react`]} />
    <div>
      <h1 className="heading">hi, I'm Connor</h1>
      <div
        className="about-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: `100%`,
          margin: `0 auto`,
          padding: `1.0875rem 1.45rem`,
        }}
      >
        <p style={{ padding: `1.45rem`, paddingTop: 0 }}>
          I'm a Full Stack Developer currently based out of the Philadelphia
          area. For as long as I can remember I've loved spending way too much
          time on the computer and I spent my teens gaming and tinkering with
          things like Photoshop and GarageBand. <br />
          <br />
          In 2018 I completed a Full Stack Boot Camp at UPenn and my focus has
          been on web programming since then, mostly creating responsive
          single-page applications. I'm very passionate about creating engaging
          user experiences and interested in gamification as a way to
          incentivize engagement and interactivity. <br />
          <br />
          Also, I <Emoji symbol="💙" label="blue heart" /> React.
        </p>
        <div className="headshot-wrapper" style={{ minWidth: 365 }}>
          <Headshot />
        </div>
      </div>
    </div>
  </Layout>
)

export default About
