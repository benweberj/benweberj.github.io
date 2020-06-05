import React from 'react'
import styled from 'styled-components'
// import rgba from './bensLibrary'

// I feel like theres a way to do this with a single function using bracket notation to call 'styled.h1' with 'styled['h1']'

const H1 = styled.h1(props => ({
  marginTop: '3rem',
  marginBottom: '1rem',
  fontSize: '2rem',
  color: props.color ? props.color : props.theme.complement,
  fontWeight: props.weight ? props.weight : props.theme.weight.bold
}))

const H2 = styled.h2(props => ({
  marginLeft: '1rem',
  '+ p': { marginLeft: '1rem' },
  marginTop: '3rem',
  marginBottom: '.8rem',
  fontSize: '1.8rem',
  color: props.color ? props.color : props.theme.primary,
  fontWeight: props.weight ? props.weight : props.theme.weight.regular
}))

const H3 = styled.h2(props => ({
  marginLeft: '2rem',
  '+ p': { marginLeft: '2rem' },
  marginTop: '3rem',
  marginBottom: '.5rem',
  fontSize: '1.5rem',
  color: props.color ? props.color : props.theme.accent,
  fontWeight: props.weight ? props.weight : props.theme.weight.regular
}))

const P = styled.p(props => ({
  color: props.color ? props.color : props.theme.complement,
  fontSize: '1.2rem',
  fontWeight: props.weight ? props.weight : props.theme.weight.thin,
  lineHeight: '2rem'
}))

const Span = styled.span(props => ({
  color: props.color ? props.color : props.theme.complement,
  fontSize: '1.2rem',
  fontWeight: props.weight ? props.weight : props.theme.weight.thin,
  lineHeight: '2rem'
}))

export default function Text (props) {
  // there has to be a better way to do this
  if (props.type === 'h1') {
    return <H1 {...props}>{props.children}</H1>
  }
  else if (props.type === 'h2') {
    return <H2 {...props}>{props.children}</H2>
  } else if (props.type === 'h3') {
    return <H3 {...props}>{props.children}</H3>
  } else if (props.type === 'p'){
    return <P {...props}>{props.children}</P>
  } else if (props.type === 'span') {
    return <Span {...props}>{props.children}</Span>
  } else {
    return <P {...props} style={{ color: 'red' }}>Unknown text type</P>
  }
}