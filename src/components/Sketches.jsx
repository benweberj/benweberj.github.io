import React from 'react'
import styled from 'styled-components'

import Text from './Text'

const Sketches_ = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1vw;
  grid-template-columns: repeat(4, 1fr);
`
const Sketch = styled.div`
  height: 200px;
  background: ${props => props.theme.complement};
  border-radius: .25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  
`
const Icon = styled.div`
  /* content: '/img/sketches/${props => props.name}-${props => props.theme.mode === 'dark' ? 'b' : 'w'}.png'; */
  width: 100px;
  border: 1px solid red;
  height: 100px;
  background-image: url('/img/sketches/${props => props.name}-${props => props.theme.mode === 'dark' ? 'b' : 'w'}.png');
`
/* src={`${ icon }-${ props.theme.mode === 'dark' ? 'w' : 'b' }`} */

const SketchInfo = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 0;
  opacity: 0;
  height: 0;
  transition: all .5s ease;
  margin-bottom: 1rem;
  > * { margin: 0 }
  #separator {
    margin-left: 15px;
  }

  &.visible {
    opacity: 1;
    height: 80px;
  }
`
const SketchPreview = styled.div`
  width: 100%;
  height: 0;
  opacity: 0;
  background: ${props => props.theme.primary};
  border-radius: .25rem;
  transition: .5s ease;
  overflow: hidden;

  .options {
    transition: all .5s ease;
    height: 0;
    background: blue;
    width: 100%;
  }

  &.active {
    opacity: 1;
    height: ${window.innerWidth * .8 * (9/16)}px;

    .options {
      height: 40px;
    }
  }
`
// import particleMesh from './particleMesh'
// import particleMesh from './particleMesh'
// import particleMesh from './particleMesh'
// import particleMesh from './particleMesh'
// import particleMesh from './particleMesh'

const sketchData = [
  { name: 'Particle Mesh', sketch: '', icon: 'nodes', description: '...' },
  { name: 'Lightning', sketch: '', icon: 'lightning', description: '...' },
  { name: 'Raining Katakana', sketch: '', icon: 'katakana', description: '..' },
  { name: 'Orbit?', sketch: '', icon: 'orbit', description: '...' },
  { name: 'Light Speed', sketch: '', icon: 'starfield', description: '...' }
]

export default class Sketches extends React.Component {
  constructor(props) {
    super(props)
    this.state = { previewOpen: false, currentSketch: null }
  }

  showSketch(sketch) {
    if (!this.state.previewOpen) {
      document.querySelector('#sketchPreview').classList.add('active')
      this.setState({ previewOpen: true })
    }
    
    this.setState({ currentSketch: sketch })
    document.querySelector('#sketchInfo').classList.add('visible')

    if (sketch === this.state.currentSketch) {
      document.querySelector('#sketchPreview').classList.remove('active')
      document.querySelector('#sketchInfo').classList.remove('visible')
      this.setState({ previewOpen: false, currentSketch: null })
    }
  }

  render() {
    return (
      <>
        <Sketches_>

          {sketchData.map((sketch, i) => {
            return (
              <Sketch key={i} onClick={() => this.showSketch(i)}>
                <Icon name={sketch.icon} />
              </Sketch>
            )
          })}

        </Sketches_>

        <SketchInfo id='sketchInfo'>
          <Text type='h2' id='sketchName'>$Sketch_name</Text>
          <Text type='h2' id='separator'>|</Text>
          <Text type='p' id='sketchDescription'>$Sketch_description</Text>
        </SketchInfo>

        <SketchPreview id='sketchPreview'>
          <div className='options' />
        </SketchPreview>
      </>
    )
  }
}