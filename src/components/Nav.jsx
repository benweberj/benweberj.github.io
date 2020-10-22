import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

import Img from './Img'

const _Nav = styled.nav(props => ({
  // border: '1px solid #5a7896',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  flexDirection: 'row-reverse',
  padding: '0 20px',
  position: 'fixed',
  right: 0,
  top: 0,
  backdropFilter: 'blur(5px)',
  borderRadius: '1000px',
  '& img': {
    height: 25,
    margin: 10,
    transition: 'all .25s ease',
    // '&:hover': {
    //   transitiion: 'all .25s ease',
    //   transform: 'scale(1.1)',
    // }
  }
}))

const socialData = [
  { id: 'github', hoverMsg: 'Look at what I\'ve been codin\.' },
  { id: 'linkedin', hoverMsg: 'Pop a couple deb dev endorsements my way if you like the site!' },
  { id: 'mail', hoverMsg: 'Emails the best way to get a hold of me.' },
  { id: 'resume', hoverMsg: 'Check out my resume.' },
]

export default props => {
  const [hovered, setHovered] = useState(false)
  const { echo, theme: { mode } } = props

  const isHovered = alias => {
    if (!hovered) return { filter: mode === 'light' && 'invert(1)' }
    if (hovered === alias) {
      return {
        transform: 'scale(1.1)',
        filter: mode === 'light' && 'invert(1) !important'
      }
    } else {
      return {
        filter: `blur(1px) ${mode === 'light' ? 'invert(1)' : ''}`,
        transform: 'scale(.9)'
      }
    }
  }

  


  return (
    <_Nav>
      {socialData.map((s, i) => (
        <Img
          key={`social-${i}`}
          onMouseEnter={_ => {
            setHovered(s.id)
            echo(s.hoverMsg, 3000)
          }}
          onMouseLeave={_ => setHovered(null)}
          style={isHovered(s.id)}
          src={require(`../img/social/${s.id}.png`)}
        />  
      ))}
      {/* <Img onMouseOver={_ => setHovered('res')} onMouseOut={_ => setHovered(null)} style={isHovered('res')} src={require('../img/social/resume.png')} />
      <Img onMouseOver={_ => { setHovered('gh'); echo('lookin at me github, are ya?')} } onMouseOut={_ => setHovered(null)} style={isHovered('gh')} src={require('../img/social/github.png')} />
      <Img onMouseOver={_ => setHovered('li')} onMouseOut={_ => setHovered(null)} style={isHovered('li')} src={require('../img/social/linkedin.png')} />
      <Img onMouseOver={_ => setHovered('mail')} onMouseOut={_ => setHovered(null)} style={isHovered('mail')} src={require('../img/social/mail.png')} /> */}
    </_Nav>
  )
}


// So to get the delayed drop in effect, I think you should just need to set all
// their opacitys to 0 and translate them up at increasing amounts. If their animation 
// speeds are all the same, then they should appear to be rolling in one after another