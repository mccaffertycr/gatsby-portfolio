import React from 'react'

import Layout from '../components/layout'
import Project from '../components/project'
import SEO from '../components/seo'

const projects = [
  {
    name: `daily sentiment journal`,
    url: `https://daily-sentiment-journal.herokuapp.com/`,
    imgUrl: '/dsj_screenshot',
    desc: `Daily Sentiment Journal is a simple tool for logging your good and bad days, users are able to make journal entries then that data is visualized on a calendar heatmap similar to Github's contribution calendar`,
    tech:
      'JavaScript (ES6+), MongoDB/Mongoose, Node/Express, React, Axios, Google OAuth, Heroku',
  },
  {
    name: `memeoth`,
    url: `http://www.memeoth.com`,
    imgUrl: '/memeoth_screenshot',
    desc: `Gamified user generated content platform for memes, includes features like a point system and daily event loop that aim to incentive interactivty and engagement with new content.`,
    tech:
      'JavaScript (ES6+), MongoDB/Mongoose, Node/Express, React, Axios, Passport, Bootstrap, Cloudinary, node-schedule, Heroku',
  },
  {
    name: `ssbu tierlist`,
    url: `http://ssbutierlist.com`,
    imgUrl: '/ssbu-tierlist_screenshot',
    desc:
      'Application built for creating and finding playlists for the game Super Smash Bros. Ultimate, users can easily create new tierlists by dragging and dropping fighters and can sort existing tierlists by High Rated, Recent and Random',
    tech:
      'JavaScript (ES6+), MongoDB/Mongoose, Node/Express, React, react-beautiful-dnd, Axios, CSS Flexbox, Heroku',
  },
  {
    name: `click-out!!`,
    url: `https://mccaffertycr.github.io/clicky-game/`,
    imgUrl: '/clickout_screenshot',
    desc: `Memory game built with React, click on each character once to win, if you click the same character twice it's game over.`,
    tech: 'JavaScript (ES6+), React, CRA, gh-pages',
  },
  {
    name: `movie guess`,
    url: `https://mccaffertycr.github.io/movie-guess/`,
    imgUrl: '/movie-guess_screenshot',
    desc:
      'Movie word guessing game, a random movie is chosen, the data is retrieved from the OMDB API then the user is able to guess what the movie is and get a hint if they are stuck',
    tech: 'HTML, CSS, JavaScript, jQuery, OMDB API',
  },
  {
    name: `nyt react app`,
    url: `https://nyt-mern-simple.herokuapp.com/`,
    imgUrl: '/nyt_screenshot',
    desc:
      'Simple New York Times article search app built with React. Use the search bar to query the NYT Api for new articles and manage them with a MongoDB backend',
    tech:
      'Node/Express, React, MongoDB/Mongoose, Axios, Bootstrap, NYT API, Heroku',
  },
  {
    name: `rps multiplayer`,
    url: `https://mccaffertycr.github.io/rps-multiplayer`,
    imgUrl: '/rps_screenshot',
    desc:
      'Real time multiplayer rock-paper-scissors, the app allows 2 players to connect and play rock-paper-scissors. There is also a chat and score is kept.',
    tech: 'HTML, CSS, JavaScript, jQuery, Bootstrap, Firebase',
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
          <Project
            key={i}
            name={p.name}
            url={p.url}
            desc={p.desc}
            tech={p.tech}
            idx={i + 1}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export default Portfolio
