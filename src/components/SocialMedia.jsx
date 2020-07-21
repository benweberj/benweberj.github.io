import React from 'react'
import styled from 'styled-components'
// import github from ''

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Site = styled.a`
  background-image: url('${props => require('../img/social/' + props.name + (props.theme.mode==='dark' ? '-w' : '-b') + '.png')}');
  background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 .5rem;
  transition: all .5s ease;
  opacity: .6;

  &:after {
    color: #fff;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    animation: ${props => props.theme.mode === 'dark' ? 'pulseLight' : 'pulseDark'} 1s ease;
  }
`

export default function SocialMedia (props) {
  return (
    <Container {...props}>
      <Site name='github' href='' />
      <Site name='linkedin' href='' />
      <Site name='mail' href='' />
      <Site name='resume' href='' />
    </Container>
  )
}