import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import Img from './Img'

const Container = styled.div(props => ({
  transition: 'all .2s ease',
  position: 'fixed',
  display: 'inline-block',
  
  width: '100%',
  height: props.closed && 30,
  maxHeight: props.closed ? 30 : 200,
  maxWidth: props.closed ? 30 : 300,
  top: 0,
  left: 0,
}))

const _Terminal = styled.pre(props => ({
  // border: '1px solid #5a7896',
  padding: !props.closed && 10,
  width: '100%',
  height: '100%',
  display: props.closed ? 'flex' : 'inline-block',
  alignItems: props.closed &&  'center',
  justifyContent: props.closed &&  'center',
  
  background: `${props.theme.base}aa`,
  color: props.theme.complement,
  fontSize: 13,
  fontFamily: 'Fira Code, sans-serif',
  fontWeight: props.closed ? props.theme.bold : props.theme.light,
  borderRadius: props.closed && 999,
  cursor: 'pointer',
  backdropFilter: 'blur(5px)',
}))

const CloseBtn = styled.button`
  width: 14px;
  height: 14px;
  background: ${props => props.theme.complement};
  color: ${props => props.theme.base};
  font-weight: ${props => props.theme.bold};
  font-size: 10px;
  border-radius: 100px;
  border: none;
  outline: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 3px;
  right: 3px;
`

export default props => {
  // const [hovered, setHovered] = useState(false)
  const [closed, setClosed] = useState(false)
  const [lastText, setLastText] = useState(props.text)
  const { text, theme, messages } = props
  const empty = text.length === 0
  // console.log('the innerHTML', closed)

  useEffect(_ => empty && setClosed(true), [])

  useEffect(_ => {
    if (text.length >= lastText) setClosed(false)
    if (!text || text.length === 0) setClosed(true)
    setLastText(text)
  }, [text])

  return (
    <Container closed={closed}>
      <_Terminal>
        {messages.map(line => line)}
      </_Terminal>
      {/* <_Terminal
        dangerouslySetInnerHTML={{ __html: closed ? 'λ' : text }}
        closed={closed}
        aboutToClose={hovered}
        onClick={_ => closed && setClosed(false)}
      /> */}
      {/* {!closed && (
        <CloseBtn
          onClick={_ => setClosed(true)}
          onMouseOver={_ => setHovered(true)}
          onMouseOut={_ => setHovered(false)}
        >
          <Img inverse={theme.mode === 'dark'} w={6} src={require('../img/close.png')} />
        </CloseBtn>
      )} */}
    </Container>
  )
}