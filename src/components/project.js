import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import Folder from './folder'

import Img from 'gatsby-image'

export const projectScreenshot = graphql`
  fragment projectScreenshot on File {
    childImageSharp {
      fluid(maxWidth: 150) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const Project = ({ name, url, idx }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage1: file(relativePath: { eq: "dsj_screenshot.png" }) {
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
        placeholderImage6: file(relativePath: { eq: "nyt_screenshot.png" }) {
          ...projectScreenshot
        }
        placeholderImage7: file(relativePath: { eq: "rps_screenshot.png" }) {
          ...projectScreenshot
        }
      }
    `}
    render={data => {
      return (
        <div style={{ width: 180, textAlign: 'center', padding: 10 }}>
          <Img fluid={data[`placeholderImage${idx}`].childImageSharp.fluid} />
          <h2 style={{ fontSize: 18, fontWeight: `normal`, color: `white` }}>
            {name}
          </h2>
        </div>
      )
    }}
  />
)

export default Project
