import React from 'react'
import styled from 'styled-components'

const Input_ = styled.input(props => ({
  outline: 'none',
  border: 'none',
  width: 50,
  padding: '0 10px',
  textAlign: 'center',
  borderRadius: props.theme.cornersSm,
  background: `${props.theme.base}`,
  color: props.theme.complement,
  cursor: 'pointer',
  transition: 'all .5s ease',
  fontWeight: props.theme.light,

  '&:hover': {
    background: props.theme.accent,
    color: '#fff',
  }
}))

export default props => {
  return <Input_ {...props} />
}