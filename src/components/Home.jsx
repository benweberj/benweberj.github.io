import React, { useState, useEffect, useRef } from 'react'

import TwoFace from './TwoFace'
import SocialMedia from './SocialMedia'
import Text from './Text'
import Div from './Div'

import P5Wrapper from 'react-p5-wrapper'
import particleMesh from '../sketches/particleMesh'

export default function Home (props) {
  const [revealed, setRevealed] = useState(false)
  const [hovered, setHovered] = useState(false)
  const { toggleMode, theme, w, h } = props

  const textRef = useRef()

  useEffect(_ => {
    setTimeout(_ => setRevealed(true), 1000)
  }, [])

  
  return (
    <>
      {/* <P5Wrapper sketch={particleMesh} theme={theme} /> */}
      <Text ref={textRef} nowrap light size={60} style={{position: 'absolute', pointerEvents: 'none', opacity: 0 }}>Howdy, I'm Ben Weber</Text>
      <Div center pt='30vh'>
        <TwoFace />

        <Div style={{ opacity: revealed ? 1 : 0, transition: 'all 1s ease, opacity 2s ease' }} ml={revealed ? 50 : 0} w={revealed ? textRef.current.offsetWidth : 0}>
        <Text lh={1} mb={5} nowrap light size={60}>Howdy, I'm Ben Weber</Text>
          <Div split>
            <Text type='h3'>
              <Text inline nowrap light o={.5}>Lead Web Developer @ </Text>
              <Text inline nowrap light href={'https://www.omic.ai'}>Omic MD</Text>
            </Text>
            <SocialMedia />
          </Div>
        </Div>
      </Div>
    </>
  )
}