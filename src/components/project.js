import React from 'react'

import Folder from './folder'

const Project = ({ name, url }) => (
  <div style={{ width: 150, textAlign: `center` }}>
    <a href={url} style={{ textDecoration: `none`, fontSize: 12 }}>
      <Folder />
      <h2 style={{ fontSize: 18, fontWeight: `normal`, color: `white` }}>
        {name}
      </h2>
    </a>
  </div>
)

export default Project
