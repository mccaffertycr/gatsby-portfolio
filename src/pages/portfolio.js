import React from 'react'

import Layout from '../components/layout'
import Project from '../components/project'
import SEO from '../components/seo'

const projects = [
  {
    name: `daily sentiment journal`,
    url: `https://daily-sentiment-journal.herokuapp.com/`,
    imgUrl: '/dsj_screenshot',
  },
  {
    name: `memeoth`,
    url: `http://www.memeoth.com`,
    imgUrl: '/memeoth_screenshot',
  },
  {
    name: `ssbu tierlist`,
    url: `http://ssbutierlist.com`,
    imgUrl: '/ssbu-tierlist_screenshot',
  },
  {
    name: `click-out!!`,
    url: `https://mccaffertycr.github.io/clicky-game/`,
    imgUrl: '/clickout_screenshot',
  },
  {
    name: `movie guess`,
    url: `https://mccaffertycr.github.io/movie-guess/`,
    imgUrl: '/movie-guess_screenshot',
  },
  {
    name: `nyt react app`,
    url: `https://nyt-mern-simple.herokuapp.com/`,
    imgUrl: '/nyt_screenshot',
  },
  {
    name: `rps multiplayer`,
    url: `https://mccaffertycr.github.io/rps-multiplayer`,
    imgUrl: '/rps_screenshot',
  },
]

const Portfolio = () => (
  <Layout>
    <SEO title="portfolio" />
    <div>
      <h1 className="heading">projects</h1>
      <div
        className="projects-container"
        style={{
          display: `flex`,
          flexFlow: `row wrap`,
          justifyContent: `flex-start`,
        }}
      >
        {projects.map((p, i) => (
          <Project key={i} name={p.name} url={p.url} idx={i + 1} />
        ))}
      </div>
    </div>
  </Layout>
)

export default Portfolio
