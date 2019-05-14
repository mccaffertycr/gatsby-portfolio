import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = () => (
  <Layout>
    <SEO title="contact" />
    <div>
      <h1 className="heading">contact</h1>
    </div>
    <div style={{ textAlign: `right` }}>
      <a
        className="social-link"
        href="https://www.linkedin.com/in/connor-mccafferty-64592a162/"
        alt="linkedin link"
        style={{ textDecoration: `none` }}
      >
        <FaLinkedin size={'5rem'} style={{ marginRight: `1rem` }} />
      </a>
      <a
        className="social-link"
        href="https://github.com/mccaffertycr"
        alt="github link"
      >
        <FaGithub size={'5rem'} style={{ marginRight: `1rem` }} />
      </a>
      <a
        className="social-link"
        href="https://twitter.com/mccaffertycr"
        alt="twitter link"
      >
        <FaTwitter size={'5rem'} />
      </a>
      <p style={{ marginTop: `1.45rem`, textAlign: 'left' }}>
        <strong>email</strong> <br />
        mccaffertycr@gmail.com <br />
        <br />
        <strong>phone</strong> <br />
        (267) 258-8994
      </p>
    </div>
  </Layout>
)

export default Contact
