import { Link } from 'gatsby'
import React from 'react'

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
      }}
    >
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
      {/* <div
        className="navbox-logo"
        style={{ width: `8rem`, height: 75, marginLeft: 10, marginTop: 5 }}
      >
        <Link className="navbox-logo-link" to="/" />
      </div> */}
    </div>
  </div>
)

export default Header
