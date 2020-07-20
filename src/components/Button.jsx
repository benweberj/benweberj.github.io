import React from 'react'
import styled from 'styled-components'

const Button = styled.button(props => ({
  margin: props.m && props.m,
  marginLeft: props.ml ? props.ml : props.mx && props.mx,
  marginRight: props.mr ? props.mr : props.mx && props.mx,
  marginTop: props.mt ? props.mt : props.my && props.my,
  marginBottom: props.mb ? props.mb : props.my && props.my,

  padding: props.p && props.p,
  paddingLeft: props.pl ? props.pl : props.px && props.px,
  paddingRight: props.pr ? props.pr : props.px && props.px,
  paddingTop: props.pt ? props.pt : props.py && props.py,
  paddingBottom: props.pb ? props.pb : props.py && props.py,

  width: props.w && props.w,
  height: props.h && props.h,
  display: props.block && 'block',

  transition: 'all .5s ease',
  background: props.theme.primary,
  color: '#fff',
  padding: props.p ? props.p : '5px 20px',
  outline: 0,
  border: 0,
  fontSize: props.size && props.size,
  borderRadius: props.rad ? props.rad : props.theme.cornersSm,
  fontWeight: props.theme.light,
  opacity: props.silent && '.3',
  '&:hover': {
    background: props.theme.accent,
    opacity: 1,
  }
  // cursor: 'pointer',
}))

export default Button