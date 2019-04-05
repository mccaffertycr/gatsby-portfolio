import React from 'react'

import Layout from '../components/layout'
import Project from '../components/project'
import SEO from '../components/seo'

const projects = [
  {
    name: `daily sentiment journal`,
    url: `https://daily-sentiment-journal.herokuapp.com/`,
  },
  {
    name: `memeoth`,
    url: `http://www.memeoth.com`,
  },
  {
    name: `ssbu tierlist`,
    url: `http://ssbutierlist.com`,
  },
  {
    name: `click-out!!`,
    url: `https://mccaffertycr.github.io/clicky-game/`,
  },
  { name: `movie guess`, url: `https://mccaffertycr.github.io/movie-guess/` },
  { name: `nyt react app`, url: `https://nyt-mern-simple.herokuapp.com/` },
  {
    name: `rps multiplayer`,
    url: `https://mccaffertycr.github.io/rps-multiplayer`,
  },
]

const Portfolio = () => (
  <Layout>
    <SEO title="portfolio" />
    <div style={{ textAlign: `right` }}>
      <h1 className="heading">projects</h1>
      <div
        style={{
          display: `flex`,
          flexFlow: `row wrap`,
          justifyContent: `flex-end`,
        }}
      >
        {projects.map(p => (
          <Project name={p.name} url={p.url} />
        ))}
      </div>
    </div>
  </Layout>
)

export default Portfolio
