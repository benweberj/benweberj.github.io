import React from 'react'
import styled from 'styled-components'
// import github from ''

const Container = styled.div`
  display: flex;
  justify-content: center;
`

  /* background-image: url('${require(`)}'); */
const Site = styled.a`
  background-image: url('/img/${props => props.name}${props => props.theme.mode === 'dark' ? '-w' : '-b'}.png');
  background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 .5rem;
  transition: all .5s ease;
  opacity: .8;

  &:after {
    color: #fff;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    animation: ${props => props.theme.mode === 'dark' ? 'pulseLight' : 'pulseDark'} 1s ease;
  }
`

export default function Media (props) {
  return (
    <Container {...props}>
      <Site name='github' href='' />
      <Site name='linkedin' href='' />
      <Site name='mail' href='' />
      <Site name='resume' href='' />
    </Container>
  )
}