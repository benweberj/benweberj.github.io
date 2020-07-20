import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import P5Wrapper from 'react-p5-wrapper'

import ThemeToggler from './components/ThemeToggler'
import TwoFace from './components/TwoFace'
import SocialMedia from './components/SocialMedia'
import Sketches from './components/Sketches'
// import follower from './follower'
import Text from './components/Text'
import Div from './components/Div'
import Programming from './components/Programming'
import Design from './components/Design'
import Skills from './components/Skills'

import meshSketch from './sketches/particleMesh.js'
import { theme } from './styles'

const Root = styled.div`
  width: 80vw;
  margin: auto;
  
  canvas { z-index: -1 }

  .themeToggler {
    margin-top: 1rem
  }

  .twoFace {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .media {
    margin-top: 1rem;
  }
`

// TODO: good font color: #2e444e

export default function BenWeber (props) {
  const { toggleMode, theme } = props
  const [w, setWidth] = useState(window.innerWidth)
  const [h, setHeight] = useState(window.innerHeight)

  useEffect(_ => {
    window.addEventListener('resize', _ => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    })
  }, [])

  const small = w < 700
  const medium = w >=700 && w < 1100
  const large = w >= 1100
  
  return (
    <Root>
      
      {/* <P5Wrapper theme={props.theme} sketch={meshSketch}></P5Wrapper> */}

      <ThemeToggler className='themeToggler' toggleMode={toggleMode} />
      <Div center col={!large}>
        <Div>
          <TwoFace className='twoFace' />
          <SocialMedia className='media' />
        </Div>
        <Div ml={large && 100} mt={(small || medium) && 30}>
          <Text center={!large} light type={large ? 'h1' : 'h2'}>Hey I'm Ben Weber</Text>
          <Text center={!large} light>Just a little note: the UX of this site should be perfect in every fucking way. It's fine that
          you're taking your time on it. Be OCD. Make interacting with every aspect of this site smooth and beautiful.</Text>
        </Div>
      </Div>

      <Text light type='h2' mt={'2vw'} mb={10}>$Heading</Text>
      <Sketches theme={theme} />

      {/* <Text type='h1' bold>About Me</Text>
      <Text type='p'>
        How's it goin' future employer, I'm Ben Weber. I'm a graphic designer and web developer based in Seattle.
        I'm a Junior at the University of Washington, looking for software and web development positions after I graduate in June 2020.
      </Text> */}

      {/* <Text type='h1'>What the fuck is up? I am an H1</Text>
      <Text type='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Text type='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

      <Text type='h2'>What the fuck is up? I am an H2</Text>
      <Text type='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

      <Text type='h3'>What the fuck is up? I am an H3</Text>
      <Text type='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text> */}
{/* 
      <Text type='h1'>Programming Projects</Text>
      <Programming />

      <div className='w5' />

      <Text type='h1'>Design Work</Text>
      <Design />

      <div className='w5' />

      <Text type='h1'>Skills</Text>
      <Skills />
      <div className='w5' /> */}

    
{/*       
      <Gallery>
        <ProgrammingProject></ProgrammingProject>
        <ProgrammingProject></ProgrammingProject>
        <ProgrammingProject></ProgrammingProject>
        <ProgrammingProject></ProgrammingProject>
        <ProgrammingProject></ProgrammingProject>
        <ProgrammingProject></ProgrammingProject>
        <ProgrammingProject></ProgrammingProject>
        <ProgrammingProject></ProgrammingProject>
        <ProgrammingProject></ProgrammingProject>
      </Gallery> */}

      {/* use Luke's daydream design to display each of your sketches */}
      
      {/* Don't even worry about graphic design until you have all the priogramming stuff done */}

      {/* <Gallery>
        <DesignProject></DesignProject>
        <DesignProject></DesignProject>
        <DesignProject></DesignProject>
        <DesignProject></DesignProject>
      </Gallery> */}

      {/* <Text type='h1' style={{ marginTop: '2rem' }}>Graphic Design Work</Text> */}

      {/* TODO: I think you need to use the withTheme higher orer component so all compnents have access to the theme */}
      {/* <P5Wrapper sketch={follower} theme={props.theme} /> */}
      {/* TODO: fix bug where pic has no height when real is shown. Should be a simple fix */}
    </Root>
  )
}