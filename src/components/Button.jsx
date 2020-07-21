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

  '&:hover': {
    // opacity: 1,
    // background: props.theme[props.inverse ? 'base' : 'complement'],
    // color: props.theme[props.inverse ? 'complement' : 'base'],
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
    // background: 'red',
    // backgroundImage: 'url(https://www.pngfind.com/pngs/m/30-303038_up-arrow-comments-upward-arrow-icon-png-transparent.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transform: 'scale(.7)',
    filter: 'invert(100%)',
  },

  '& p': { transition: 'all .25s ease' },

  '&:hover': {
    opacity: 1,
    '&:after': { transform: 'translateY(100%) scale(.7)' },
    '& p': { transform: 'translateY(100%)' }
  }
}))

export default props => {
  const { intent, children } = props
  
  // TODO: for arrows, make your own then conditionally rotate (make sure to keep individual rotation when adding translateY)
  const src = (i => {
    switch (i) {
      case 'up': return 'https://www.pngfind.com/pngs/m/30-303038_up-arrow-comments-upward-arrow-icon-png-transparent.png'
      case 'down': return 'https://p7.hiclipart.com/preview/402/864/42/arrow-computer-icons-down-arrow.jpg'
      case 'left': return 'https://p7.hiclipart.com/preview/693/366/397/computer-icons-clip-art-left-arrow.jpg'
      case 'right': return 'https://www.freeiconspng.com/uploads/right-arrow-icon-12.png'
      default: return null
    }
  })(intent)

  return (
    <Button_ {...props} src={src}><p>{children}</p></Button_>
  )
}