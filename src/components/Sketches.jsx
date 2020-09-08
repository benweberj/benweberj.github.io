import React, { useState } from 'react'
import styled from 'styled-components'
import P5Wrapper from 'react-p5-wrapper'

import Text from './Text'
import Div from './Div'
import Input from './Input'
import Button from './Button'
import particleMesh from '../sketches/particleMesh'

import AnimateHeight from 'react-animate-height'
// import particleMesh from './particleMesh'
// import particleMesh from './particleMesh'
// import particleMesh from './particleMesh'
// import particleMesh from './particleMesh'

const Root = styled.div`
  .sketch {
    img { transition: all .25s ease }
    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }
`

const sketchData = [
  {
    name: 'Particle Mesh',
    sketch: particleMesh,
    icon: 'nodes',
    description: 'One of my first complex sketches. Nodes attract to the cursor.' ,
    options: {
      particleCount:  100,
      connectionDist:  200,
      attraction:  3,
      attractionDist:  200,
      repulseMultiplier:  5,
    }
  },
  {
    name: 'Lightning',
    sketch: null,
    icon: 'lightning',
    description: '...' ,
    options: [

    ]
  },
  {
    name: 'Raining Katakana',
    sketch: null,
    icon: 'katakana',
    description: 'Recreation of the raining code animation from the Matrix' ,
    options: [

    ]
  },
  {
    name: 'Orbit?',
    sketch: null,
    icon: 'orbit',
    description: '...' ,
    options: [

    ]
  },
  {
    name: 'Light Speed',
    sketch: null,
    icon: 'starfield',
    description: 'Animation resembling the light-speed effect from Star Wars.',
    options: [

    ]
  }
]

export default props => {
  const { theme } = props
  const [sketch, setSketch] = useState(null) // temporary
  const [open, setOpen] = useState(false) // temporary
  const [options, showOptions] = useState(true)


  const handleClick = clicked => {
    if (sketch && sketch.name === clicked.name) {
      setOpen(false)
      setTimeout(_ => setSketch(null), 1000)
    } else {
      setOpen(true)
      setSketch(clicked)
    }
  }

  const suffix = props.theme.mode === 'dark' ? 'b' : 'w'
  const stickToTop = { position: 'absolute', top: 0, left: 0, width: '100%' }
  return (
    <Root>
      <Div flex>
        {sketchData.map((s, i) => {
          const selected = (sketch && sketch.name) === s.name
          
          return (
            <Div disabled={!s.sketch} w={'100%'} h={80} minW={80} mr={5} className='sketch' rounded center key={i} bg={theme[selected ? 'primary' : 'complement']} onClick={_ => handleClick(s)}>
              <img height={40} style={{ transform: selected && 'scale(1.2)' }} src={require(`../img/sketches/${s.icon}-${selected ? 'w' : suffix}.png`)} />
            </Div>
          )
        })}
      </Div>
      
      <AnimateHeight height={open ? 'auto' : 0} duration={1000}>
        <Text bold accent type='h3' mt={30} mb={10}>{sketch && sketch.name} <Text inline light ml={5}>{sketch && sketch.description}</Text></Text>
        <Div rounded contain style={{ position: 'relative' }}>

          <AnimateHeight height={options ? 'auto' : 0} style={stickToTop}>
            <Div flex wrap w={'100%'} p={10} bg={`${theme.base}33`}>
              {sketch && Object.keys(sketch.options).map(o => (
                <Div mr={30} align='center'>
                  <Text inverse light size={15} mr={10}>{o}</Text>
                  <Input bg={'blue'} placeholder={sketch.options[o]} />
                </Div>
              ))}
              <Button intent='right' inverse ml='auto' onClick={_ => showOptions(false)}>Apply</Button>
            </Div>
          </AnimateHeight>

          <AnimateHeight height={!options ? 'auto' : 0} style={stickToTop}>
            <Button intent='up' inverse silent block mx={'auto'} mt={10} size={14} rad={100} onClick={_ => showOptions(true)}>Bring back options</Button>
          </AnimateHeight>

          <Div center w={'100%'} contain bg={theme.complement}>
            <P5Wrapper sketch={sketch && sketch.sketch} theme={theme} />
          </Div>
        </Div>
      </AnimateHeight>
    </Root>
  )
}


// export default class Sketches extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { previewOpen: false, currentSketch: null }
//   }

//   showSketch(name, description, sketch) {
//     const sketchPreview = document.querySelector('#sketchPreview')
//     const sketchInfo = document.querySelector('#sketchInfo')

//     if (!this.state.previewOpen) {
//       sketchPreview.classList.add('active')
//       sketchPreview.style.height = `${sketchPreview.offsetWidth * (9/16)}px`
//       this.setState({ previewOpen: true })
//     }
    
//     // Show the current sketch in the preview
//     this.setState({ currentSketch: sketch })
//     sketchInfo.classList.add('visible')
//     document.querySelector('#sketchName').innerText = name
//     document.querySelector('#sketchDescription').innerText = description

//     if (sketch === this.state.currentSketch) {
//       sketchPreview.classList.remove('active')
//       sketchInfo.classList.remove('visible')
//       sketchPreview.style.height = 0;
//       this.setState({ previewOpen: false, currentSketch: null })
//     }
//   }

//   render() {
//     return (
//       <>
//         <Sketches_>

//           {sketchData.map((sketch, i) => {
//             return (
//               <Sketch key={i} onClick={() => this.showSketch(sketch.name, sketch.description, sketch.sketch)}>
//                 <Icon name={sketch.icon} />
//               </Sketch>
//             )
//           })}

//         </Sketches_>

//         <SketchInfo id='sketchInfo'>
//           <Text type='h2' id='sketchName'>$Sketch_name</Text>
//           <Text type='h2' id='separator'>|</Text>
//           <Text type='p' id='sketchDescription'>$Sketch_description</Text>
//         </SketchInfo>

//         <SketchPreview id='sketchPreview'>
//           <div className='options' />
//           <div className='liveSketch'>
//             <P5Wrapper sketch={this.state.currentSketch} theme={props => props.theme} />
//           </div>
//         </SketchPreview>
//       </>
//     )
//   }
// }