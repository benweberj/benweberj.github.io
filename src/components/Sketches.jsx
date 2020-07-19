import React, { useState } from 'react'
import styled from 'styled-components'
import P5Wrapper from 'react-p5-wrapper'

import Text from './Text'
import Div from './Div'
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
// const Sketch = styled.div`
//   height: 100px;
//   background: ${props => props.theme.complement};
//   border-radius: .25rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 10;

//   &:hover {
//     div {
//       transform: scale(1.2);
//     }
//   }
// `
// const SketchInfo = styled.div`
//   display: flex;
//   align-items: flex-end;
//   margin-left: 0;
//   opacity: 0;
//   height: 0;
//   transition: all .5s ease;
//   margin-bottom: 1rem;
//   > * { margin: 0 }
//   #separator {
//     margin-left: 15px;
//   }

//   &.visible {
//     opacity: 1;
//     height: 80px;
//   }
// `
// const SketchPreview = styled.div`
//   width: 100%;
//   height: 0;
//   opacity: 0;
//   /* background: ${props => props.theme.complement}; */
//   border: 1px dashed ${props => props.theme.complement};
//   border-radius: .25rem;
//   transition: .5s ease;
//   overflow: hidden;

//   .options {
//     transition: all .5s ease;
//     height: 0;
//     background: ${props => props.theme.base}55;
//     width: 100%;
//   }

//   &.active {
//     opacity: 1;
//     /* height: ${window.innerWidth * .8 * (9/16)}px; */
//     /* height: 0px; */

//     .options {
//       height: 40px;
//     }

//     .liveSketch {
//       height: 100%;
//       /* background: red; */
//     }
//   }
// `

const sketchData = [
  { name: 'Particle Mesh', sketch: particleMesh, icon: 'nodes', description: 'One of my first complex sketches. Nodes attract to the cursor.' },
  { name: 'Lightning', sketch: null, icon: 'lightning', description: '...' },
  { name: 'Raining Katakana', sketch: null, icon: 'katakana', description: 'Recreation of the raining code animation from the Matrix' },
  { name: 'Orbit?', sketch: null, icon: 'orbit', description: '...' },
  { name: 'Light Speed', sketch: null, icon: 'starfield', description: 'Animation resembling the light-speed effect from Star Wars.' }
]

export default props => {
  const { theme } = props
  const [sketch, setSketch] = useState(null)

  const handleClick = clicked => {
    if (sketch && sketch.name === clicked.name) {
      setSketch(null)
    } else {
      setSketch(clicked)
    }
  }

  const suffix = props.theme.mode === 'dark' ? 'b' : 'w'
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
      
      <AnimateHeight height={sketch ? 'auto' : 0}>
        <Text bold accent type='h3' mt={30} mb={10}>{sketch && sketch.name} <Text inline light ml={5}>{sketch && sketch.description}</Text></Text>
        <Div center w={'100%'} contain rounded bg={theme.complement}>
          <P5Wrapper sketch={sketch && sketch.sketch} theme={theme} />
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