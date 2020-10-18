import React, { useState } from 'react'
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

export default props => {
  const [hovered, setHovered] = useState(false)

  const isHovered = alias => {
    if (!hovered) return {}
    if (hovered === alias) {
      return {
        transform: 'scale(1.1)'
      }
    } else {
      return {
        filter: 'blur(1px)',
        transform: 'scale(.9)'
      }
    }
  }

  return (
    <_Nav>
      <Img onMouseOver={_ => setHovered('gh')} onMouseOut={_ => setHovered(null)} style={isHovered('gh')} src={require('../img/social/github.png')} />
      <Img onMouseOver={_ => setHovered('li')} onMouseOut={_ => setHovered(null)} style={isHovered('li')} src={require('../img/social/linkedin.png')} />
      <Img onMouseOver={_ => setHovered('mail')} onMouseOut={_ => setHovered(null)} style={isHovered('mail')} src={require('../img/social/mail.png')} />
      <Img onMouseOver={_ => setHovered('res')} onMouseOut={_ => setHovered(null)} style={isHovered('res')} src={require('../img/social/resume.png')} />
    </_Nav>
  )
}


// So to get the delayed drop in effect, I think you should just need to set all
// their opacitys to 0 and translate them up at increasing amounts. If their animation 
// speeds are all the same, then they should appear to be rolling in one after another