import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
// import P5Wrapper from 'react-p5-wrapper'

import Text from './components/Text'
import Div from './components/Div'
import Img from './components/Img'

import Home from './components/Home'
import Omic from './components/Omic'

import particleMesh from './sketches/particleMesh'
// import Sketches from './components/Sketches'
// import Programming from './components/Programming'
// import Design from './components/Design'
// import Skills from './components/Skills'

export default function BenWeber (props) {
  const { toggleMode, theme, w, h } = props
  
  return (
    <>

      {/* <Div w='100vw' minH='100vh' debug>
        <Home {...props} />
      </Div>

      <Div w='100vw' minH='100vh'>
        <Omic {...props} />
      </Div> */}

      {/* Omic */}
      {/* <Div split w='100vw' h='100vh' cover bg='radial-gradient(#192b41f5, #0c1015f5), url(https://us.123rf.com/450wm/nicholashan/nicholashan1709/nicholashan170900485/87166578-de-3d-weergave-van-golf-deeltjes-achtergrond-3d-verlichte-digitale-golf-van-gloeiende-deeltjes.jpg?ver=6)' >
        <Div center col w='50%' h='100%' p={50}>
          <Text bold type='h2' lh={1.2} mb={'1vh'}>I currently work at Omic as the Lead Web Developer.</Text>
          <Text light lh={2}>
            Omic is like lorem ipsum, in that lorem ipsum dolor sit amet. Let me rephrase that, consecutar amet lorem dolor
            amet mcSit mim a lor alema ipsum lorem.
          </Text>
        </Div> */}
        {/* <Text light type='h3' lh={2}>Omic is [description of omic] Lorem adslkjfsdaklfjkdjfldsdjfklds fdjklfdkfjdksfjd  djdjfdjfdj djdjd fdjkfdkjf dkfjklasfkldskljf lkfkljadsfkjldskfld fdasfjdjfdsjfjdskfdsjf kjdsfjdkfd  dkkdkdkdkd </Text> */}
        {/* <Div w='50%' h='100%' p={50}>
          <Div glass p={30} onMouseEnter={_ => setHovered(true)} onMouseLeave={_ => setHovered(false)}>
            <Text lh={2} bold type='h3'>Holo UI</Text>
            <Text lh={2} light>Holo UI is the UI scheme I created for Omic. Its consists of low-opacity, light-blue backgrounds with a light blue border <Text inline accent={hovered}>on focus</Text>.</Text>
          </Div>
        </Div>
      </Div> */}

      {/* <> */}
    </>
    // <Root>
      
    //   {/* <P5Wrapper theme={props.theme} sketch={meshSketch}></P5Wrapper> */}

    //   <ThemeToggler className='themeToggler' toggleMode={toggleMode} />
    //   <Div center col={!large}>
    //     <Div>
    //       <TwoFace className='twoFace' />
    //       <SocialMedia className='media' />
    //     </Div>
    //     <Div ml={large && 100} mt={(small || medium) && 30}>
    //       <Text center={!large} light type={large ? 'h1' : 'h2'}>Fuck off I'm Ben Wener</Text>
    //       <Text maxW={600} center={!large} light>Just a little note: the UX of this site should be perfect in every fucking way. It's fine that
    //       you're taking your time on it. Be OCD. Make interacting with every aspect of this site smooth and beautiful.</Text>
    //     </Div>
    //   </Div>

    //   <Text light type='h2' mt={'2vw'} mb={10}>Some of my p5.js sketches</Text>
    //   <Sketches theme={theme} />

    //   {/* <Text light type='h2' mb={10} mt={30}>What I've done to Learn Web Development</Text> */}
    //   <Text light type='h2' mb={10} mt={30}>...</Text>
    //   <Omic>
    //     <Text type='h3'>I currently work at Omic</Text>

    //     {/* <Text light >Omic is a genomics analysis startup, working to advance the way healthcare professionals interact with patient data.</Text>
    //     <Text light>We supply doctors, biologists, researchers, and coders with a suite of bioinformatics pipelines and machine learning models
    //       to uncover patient risk factors.</Text>
    //     <Text light>These models have been trained on hundreds of thousands of patients' FASTQ files (text file with you DNA sequences, with quality scores attached)
    //      and have already shown to have successful results.</Text>
    //     <Text light>Omic is currently putting its full effort towards its C19 initiative, which focuses on building a community of researchers, biologists and coders to
    //       build experiments, execute pipelines, run models, and share your results with a team of people who want to end COVID-19 just as much as you do.</Text> */}
    //     <Text light>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text> 
    //   </Omic>
    //   </Root>
  )
}

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