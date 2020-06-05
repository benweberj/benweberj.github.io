import React from 'react'
import styled from 'styled-components'

const Gallery_ = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: .5rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export default function Gallery (props) {
  return <Gallery_>{props.children}</Gallery_>
}