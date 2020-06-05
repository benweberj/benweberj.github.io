import React from 'react'
import styled from 'styled-components'

// needed to use the 'props =>' format is so I had access to the used variable
const Toggler = styled.button(props => ({
  opacity: .3,
  padding: props.used ? '.5rem .5rem' : '.5rem 2rem',
  borderRadius: '100px',
  outline: 0,
  border: 0,
  fontWeight: props.theme.weight.regular,
  background: props.theme.complement,
  transition: 'all .5s ease',
  display: 'block',
  margin: 'auto',

  '&:hover': {
    // boxShadow: function () {
    //   if (props.theme.mode === 'dark') {
    //     if (props.used) {
    //       return '0 0 30px 8px rgba(255, 255, 255, 1)'
    //     } else {
    //       return '0 0 30px 8px rgba(255, 255, 255, .1)'
    //     }
    //   } else {
    //     return false
    //   }
    // },
    opacity: 1,
    padding: !props.used && '.5rem 2.5rem',
    transform: props.used && 'scale(1.2)'
  },
    // (() => {
    //   
    //     props.used ? `0 0 30px 8px rgba(255, 255, 255, 1)` : `0 0 30px 8px rgba(255, 255, 255, .1)`
    //   } else { 
    //     return false
    //   }
    // }),
    // boxShadow: (props.theme.mode === 'dark' && props.used === true) && `0 0 20px 3px red`,

}))

let used = false;

export default function ThemeToggler (props) {
  if (!used) {
    used = true
    return <Toggler onClick={props.toggleMode} used={false} {...props} />
  } else {
    return <Toggler onClick={props.toggleMode} used={true} {...props} />
  }
  

  // return (
    
    
    //
    //
    // TODO: figure out how to apply an animation on click. Having trouble referring to the 
    // button in order to add styles to it
    //
    //
  // )
}