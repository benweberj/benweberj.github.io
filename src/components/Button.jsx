import React from 'react'
import styled from 'styled-components'

import Div from './Div'

const Button_ = styled.button(props => ({
  margin: props.m && props.m,
  marginLeft: props.ml ? props.ml : props.mx && props.mx,
  marginRight: props.mr ? props.mr : props.mx && props.mx,
  marginTop: props.mt ? props.mt : props.my && props.my,
  marginBottom: props.mb ? props.mb : props.my && props.my,

  padding: props.p ? props.p : '5px 20px',
  paddingLeft: props.pl ? props.pl : props.px && props.px,
  paddingRight: props.pr ? props.pr : props.px && props.px,
  paddingTop: props.pt ? props.pt : props.py && props.py,
  paddingBottom: props.pb ? props.pb : props.py && props.py,
  
  width: props.w && props.w,
  height: props.h && props.h,
  display: props.block && 'block',
  
  transition: 'all .5s ease',
  cursor: 'pointer',
  position: 'relative',
  // background: props.theme.primary,
  background: 'none',
  color: props.theme[props.inverse ? 'base' : 'complement'],
  outline: 0,
  border: `1px solid ${props.theme[props.inverse ? 'base' : 'complement']}`,
  fontSize: props.size && props.size,
  borderRadius: props.rad && props.rad,
  fontWeight: props.theme.light,
  opacity: props.silent && '.3',
  overflow: 'hidden',
  boxSizing: 'border-box',

  '&:hover': {
    // opacity: 1,
    // background: props.theme[props.inverse ? 'base' : 'complement'],
    // color: props.theme[props.inverse ? 'complement' : 'base'],
  },

  '&:before': {
    transition: 'all .25s ease',
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: props.inverse ? props.theme.base : props.theme.complement,
    transform: 'scaleY(0)', 
    transformOrigin: 'bottom',
  },

  '&:after': {
    transition: 'all .25s ease',
    content: '""',
    position: 'absolute',
    left: 0,
    top: '-100%',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${props.src})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'scale(.7)',
    filter: props.inverse && props.theme.mode === 'light' &&  'invert(100%)',
  },

  '& p': { transition: 'all .25s ease' },

  '&:hover': {
    opacity: 1,
    '&:after': { transform: 'translateY(100%) scale(.7)' },
    '&:before': { transform: 'scaleY(1)' },
    '& p': { transform: 'translateY(100%)' }
  }
}))

export default props => {
  const { intent, children } = props
  
  // TODO: for arrows, make your own then conditionally rotate (make sure to keep individual rotation when adding translateY)
  // const src = (i => {
  //   switch (i) {
  //     case 'up': return ''
  //     case 'down': return ''
  //     case 'left': return ''
  //     case 'right': return ''
  //     default: return null
  //   }
  // })(intent)

  return (
    <Button_ {...props} src={require(`../img/intents/${intent}.png`)}><p>{children}</p></Button_>
  )
}