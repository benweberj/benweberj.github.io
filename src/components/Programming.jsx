import React from 'react'

import Gallery from './Gallery'
import Project from './Project'

const projectData = [
  { id: 'mesh', name: 'Particle Mesh', description: 'what the fuck did ou just say about me you little fuckin gbotch ill have you know that i a  afag', repo: '', demo: '', img: 'mesh.gif' },
  { id: 'matrix', name: 'Raining Code', description: 'asdfasfasdf', repo: '', demo: '', img: 'matrix.gif' },
  { id: 'star', name: 'Starfield', description: 'asdfasdfasdf', repo: '', demo: '', img: 'starfield.gif' },
  // { id: 'light', name: 'Lightning', description: '', repo: '', demo: '', img: 'mesh.gif' },
]

const projects = projectData.map((proj, i) => {
  return (
    <Project gridArea={proj.id} preview={proj.img} key={i}>
      <div className='overlay'>
        <h3 style={{ fontSize: '1.5rem' }}>{proj.name}</h3>
        <p style={{ lineHeight: '1.5rem' }}>{proj.description}</p>
      </div>
    </Project>
  )
})

export default function Programming (props) {
  return (
    <Gallery>
      {projects}
    </Gallery>
  )
}