import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div style={{ textAlign: `right` }}>
      <h1 className="heading">contact</h1>
    </div>
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
    <p style={{ marginTop: `1.45rem` }}>
      email <br />
      mccaffertycr@gmail.com <br />
      <br />
      phone <br />
      (267) 258-8994
    </p>
  </Layout>
)

export default Contact
