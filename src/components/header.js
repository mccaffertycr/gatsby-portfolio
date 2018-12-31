import { Link } from 'gatsby'
import React from 'react'

import Logo from './logo'
import './header.css'

const Header = () => (
  <div
    style={{
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `flex-start`,
      }}
    >
      <div className="home-container">
        <Link className="navbox-logo-link" to="/">
          <div className="navbox-logo">
            <div className="svg-wrapper">
              <Logo />
            </div>
          </div>
        </Link>
      </div>
      <ul className="navbox" style={{ listStyleType: `none` }}>
        <li className="navbox-item">
          <Link to="/" className="navbox-link">
            ABOUT
          </Link>
        </li>
        <li className="navbox-item">
          <Link className="navbox-link" to="/portfolio">
            PORTFOLIO
          </Link>
        </li>
        <li className="navbox-item">
          <Link className="navbox-link" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
