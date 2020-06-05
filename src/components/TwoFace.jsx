import React from 'react'
import styled from 'styled-components'

const Real = styled.img(props => ({
  position: 'absolute'
}))

const Vector = styled.img(props => ({
  background: props.theme.primary,
  position: 'relative',
  top: 0,
  left: 0,
  transition: 'all .5s ease !important',
  '&:hover': {
    background: props.theme.complement
  }
}))

const picStyles = {
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  display: 'block',
  transition: 'transform .5s ease, opacity .5s ease'
}

export default function TwoFace (props) {
  function showReal () {
    // is there a way to factor this out? It doesn't work right now and I think its because the components aren't yet defined
    let real = document.getElementById('real')
    let vector = document.getElementById('vector')

    vector.style.opacity = 0
    real.style.opacity = 1
    vector.style.transform = 'scale(1.2)'

    setTimeout(() => {
      vector.style.zIndex = -100
      vector.style.transform = 'scale(1)'
    }, 500)
  }

  function showVector() {
    let real = document.getElementById('real')
    let vector = document.getElementById('vector')

    vector.style.opacity = 1
    vector.style.zIndex = 100
    real.style.transform = 'scale(1.2)'
    real.style.opacity = 0

    setTimeout(() => {
      real.style.transform = 'scale(1)'
    }, 500)
  }

  return (
    <div {...props}> {/* I really don't like that you have to do all these workarounds to pass styles. WHy doesnt just setting it work in benWeber.js */}
      <Real id='real' style={picStyles} src='/img/real.png' onClick={showVector}/>
      <Vector id='vector' style={picStyles} src='/img/vec-t.png' onClick={showReal}/>
    </div>
  )
}