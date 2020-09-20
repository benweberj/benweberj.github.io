import React from 'react'
import styled from 'styled-components'

const Img = styled.img(props => ({
  transition: 'all .5s ease',

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

  borderRadius: props.rounded ? props.theme.corners : props.rad ? props.rad : props.circle ? 999999 : 0,
  width: props.w && props.w,
  height: props.h && props.h,
  maxWidth: props.maxW && props.maxW,
  maxHeight: props.maxH && props.maxH,

  opacity: props.disabled && .4, 
}))

export default props => <Img src={props.src} {...props} />
