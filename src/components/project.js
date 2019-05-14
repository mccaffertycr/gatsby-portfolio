import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import Folder from './folder'

import Img from 'gatsby-image'
import Modal from 'react-responsive-modal'

export const projectScreenshot = graphql`
  fragment projectScreenshot on File {
    childImageSharp {
      fluid(maxWidth: 450) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

class Project extends Component {
  state = { open: false }
  toggleModal = e => {
    e.preventDefault()
    this.setState({ open: !this.state.open })
  }
  render() {
    const { name, url, idx, desc, tech } = this.props
    return (
      <StaticQuery
        query={graphql`
          query {
            placeholderImage1: file(
              relativePath: { eq: "dsj_screenshot.png" }
            ) {
              ...projectScreenshot
            }
            placeholderImage2: file(
              relativePath: { eq: "memeoth_screenshot.png" }
            ) {
              ...projectScreenshot
            }
            placeholderImage3: file(
              relativePath: { eq: "ssbu-tierlist_screenshot.png" }
            ) {
              ...projectScreenshot
            }
            placeholderImage4: file(
              relativePath: { eq: "clickout_screenshot.png" }
            ) {
              ...projectScreenshot
            }
            placeholderImage5: file(
              relativePath: { eq: "movie-guess_screenshot.png" }
            ) {
              ...projectScreenshot
            }
            placeholderImage6: file(
              relativePath: { eq: "nyt_screenshot.png" }
            ) {
              ...projectScreenshot
            }
            placeholderImage7: file(
              relativePath: { eq: "rps_screenshot.png" }
            ) {
              ...projectScreenshot
            }
          }
        `}
        render={data => {
          return (
            <div
              style={{
                cursor: 'pointer',
                width: 180,
                textAlign: 'center',
                padding: 10,
              }}
            >
              <a href={'modalDialog'} onClick={this.toggleModal}>
                <Img
                  className="project-wrapper"
                  fluid={data[`placeholderImage${idx}`].childImageSharp.fluid}
                />
              </a>
              <h2
                style={{ fontSize: 18, fontWeight: `normal`, color: `white` }}
              >
                {name}
              </h2>
              <Modal
                open={this.state.open}
                onClose={this.toggleModal}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  maxWidth: 450,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    width: 400,
                    color: 'black',
                    height: `70vh`,
                  }}
                >
                  <h2>{name}</h2>
                  <Img
                    fluid={data[`placeholderImage${idx}`].childImageSharp.fluid}
                  />
                  <a style={{ textDecoration: 'underline' }} href={url}>
                    Live Demo
                  </a>
                  <p>{desc}</p>
                  <p>Technologies Used: {tech}</p>
                </div>
              </Modal>
            </div>
          )
        }}
      />
    )
  }
}

export default Project
