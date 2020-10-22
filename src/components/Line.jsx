import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AnimateHeight from 'react-animate-height'

import Div from './Div'
import Text from './Text'

export default props => {
  const [expired, setExpired] = useState(false)
  const [wiped, setWiped] = useState(false)
  const [text, setText] = useState('')
  const { time, msg, nullify, id } = props

  const writeSpeed = 20
  const delSpeed = 10

  const writeText = _ => {
    const deleteTime = msg.length * delSpeed
    setTimeout(_ => setExpired(true), time)
    setTimeout(_ => {
      setWiped(true)
      nullify(id)
    }, time + deleteTime + 100)

    for (let i = 0; i <= msg.length; i++) {
      const timer = setTimeout(_ => {
        // typing out all the letters
        setText(msg.substring(0, i))
      }, writeSpeed * i)
    }
  }

  useEffect(_ => {
    writeText()
  }, [])

  useEffect(_ => {
    let t = text
    for (let i = t.length-1; i >= 0; i--) {
      setTimeout(_ => {
        // Not 100% sure why you need to reverse the index, but I haven't even looked into it
        setText(t.substring(0, t.length-1-i))
      }, delSpeed * i)
    }
  }, [expired])

  return (
    <AnimateHeight height={wiped ? 0 : 'auto'}>
      <Div iflex>
        <Text code inline color='#5b9' mr={10}>λ</Text>
        <Text code inline>{text}</Text>
      </Div>
    </AnimateHeight>
  )
}