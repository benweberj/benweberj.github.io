import React from 'react'

import Gallery from './Gallery'
import Project from './Project'

const projectData = [
  { id: 'avole', description: 'what the fuck did ou just say about me you little fuckin gbotch ill have you know that i a  afag', img: 'avole.png' },
  { id: 'airpact', description: 'asdfasfasdf', img: 'airpact-fire.png' },
  { id: 'vizinet', description: 'asdfasdfasdf', img: 'vizinet.png' },
]

const projects = projectData.map((proj, i) => {
  return (
    <Project hide gridArea={proj.id} preview={proj.img} key={i}>
      <div className='overlay'>
        <p>{proj.description}</p>
      </div>
    </Project>
  )
})

export default function Programming(props) {
  return (
    <Gallery>
      {projects}
    </Gallery>
  )
}