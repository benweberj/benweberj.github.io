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
  background: #111;
  z-index: 10;
`
const SketchInfo = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 0;
  opacity: 0;
  height: 0;
  transition: all .5s ease;
  margin-bottom: 1rem;

  &.visible {
    opacity: 1;
    height: 80px;
  }

  h2 { margin: 0 10px 0 0 }
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

const sketchData = [
  {},
  {},
  {},
  {},
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

              </Sketch>
            )
          })}

        </Sketches_>

        <SketchInfo id='sketchInfo'>
          <Text type='h2' id='sketchName'>Particle Mesh</Text>
          <Text type='h2'>|</Text>
          {/* <Text type='p' className='sketchDescription'>$Sketch_description</Text> */}
          <Text type='p' className='sketchDescription'>This thing will make you do things and it is also a thing itself.</Text>
        </SketchInfo>

        <SketchPreview id='sketchPreview'>
          <div className='options' />
        </SketchPreview>
      </>
    )
  }
}