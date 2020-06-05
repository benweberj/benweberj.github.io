import React from 'react'
import styled from 'styled-components'

const Project_ = styled.div`
  background: url('/img/${props => props.preview}');
  background-size: cover;
  grid-area: ${props => props.id};
  height: 400px;
  overflow: hidden;
  cursor: pointer;
  /* box-shadow: 0 0 20px 0px white; */
  /* border: ${props => props.theme.mode === 'dark' && `1px solid ${props.theme.primary}`}; */

  &:hover {
    .overlay {
      transform: scale(1.05);
      opacity: ${props => props.hide && 1};
      h3 {
        transition: color .5s ease;
        color: ${props => props.theme.primary};
      }
    }
  }

  .overlay {
    width: 100%;
    height: 100%;
    padding: 2rem;
    background: #0008;
    /* background: ${props => props.theme.mode === 'dark' ? `#fff2` : '#0008'}; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: ${props => props.hide ? 0 : 1};
    transition: all .3s ease;
    color: #fff;
  }
`

export default function Project (props) {
  console.log(props)
  return <Project_ {...props} />
}