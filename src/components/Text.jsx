import React from 'react'
import styled from 'styled-components'

const Text = styled.p(props => ({
  fontSize: props.type === 'h1' ? 50 : props.type === 'h2' ? 40 : props.type === 'h3' ? 25 : props.size ? props.size : props.inline && 'inherit',

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
  minWidth: props.minW && props.minW,
  minHeight: props.minH && props.minH,
  maxWidth: props.maxW && props.maxW,
  maxHeight: props.maxH && props.maxH,
  whiteSpace: props.nowrap && 'nowrap',

  fontWeight: props.bold ? props.theme.bold : props.light ? props.theme.light : props.regular ? props.theme.regular : props.inline ? 'inherit' : props.theme.regular,
  color: props.accent ? props.theme.primary : props.color ? props.color : props.inverse ? props.theme.base : props.theme.complement,
  opacity: props.o ? props.o : 1,
  fontStyle: props.italic && 'italic',
  display: props.inline && 'inline !important',
  textAlign: props.center && 'center',
  lineHeight: props.lh && props.lh,
  transition: 'all .5s ease',
  fontFamily: props.code ? 'Fira Code, monospace' : props.inline && 'inherit',

  '& a': {
    fontSize: 'inherit',
    color: props.theme.accent,
    textDecoration: 'none',
    transition: 'all .5s ease',
    '&:hover': {
      color: props.theme.complement,
    }
  }
}))

export default React.forwardRef((props, ref) => props.href ?
  <Text ref={ref} {...props}><a href={props.href}>{props.children}</a></Text>
:
  <Text ref={ref} {...props}>{props.children}</Text>
)