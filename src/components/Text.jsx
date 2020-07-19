import React from 'react'
import styled from 'styled-components'

const Text = styled.p(props => ({
  fontSize: props.type === 'h1' ? 50 : props.type === 'h2' ? 40 : props.type === 'h3' ? 25 : 18,

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

  fontWeight: props.bold ? props.theme.bold : props.light ? props.theme.light : props.theme.regular,
  color: props.accent ? props.theme.primary : props.color ? props.color : props.theme.complement,

  display: props.inline && 'inline !important',
  textAlign: props.center && 'center'
}))

export default Text

// const H1 = styled.h1(props => ({
//   marginTop: '3rem',
//   marginBottom: '1rem',
//   fontSize: '2rem',
//   color: props.color ? props.color : props.theme.complement,
//   fontWeight: props.weight ? props.weight : props.theme.weight.bold
// }))

// const H2 = styled.h2(props => ({
//   marginLeft: '1rem',
//   '+ p': { marginLeft: '1rem' },
//   marginTop: '3rem',
//   marginBottom: '.8rem',
//   fontSize: '1.8rem',
//   color: props.color ? props.color : props.theme.primary,
//   fontWeight: props.weight ? props.weight : props.theme.weight.regular
// }))

// const H3 = styled.h2(props => ({
//   marginLeft: '2rem',
//   '+ p': { marginLeft: '2rem' },
//   marginTop: '3rem',
//   marginBottom: '.5rem',
//   fontSize: '1.5rem',
//   color: props.color ? props.color : props.theme.accent,
//   fontWeight: props.weight ? props.weight : props.theme.weight.regular
// }))

// const P = styled.p(props => ({
//   color: props.color ? props.color : props.theme.complement,
//   fontSize: '1.2rem',
//   fontWeight: props.weight ? props.weight : props.theme.weight.thin,
//   lineHeight: '2rem'
// }))

// const Span = styled.span(props => ({
//   color: props.color ? props.color : props.theme.complement,
//   fontSize: '1.2rem',
//   fontWeight: props.weight ? props.weight : props.theme.weight.thin,
//   lineHeight: '2rem'
// }))



// import React from 'react'

// import { withStyles } from '@material-ui/core/styles'

// const localStyles = theme => ({
//   text: {
//     color: theme.secondary,
//     transition: 'all .5s ease',
//     fontWeight: theme.regular,
//     margin: 0,
//     display: 'block',
//     '& *': { fontSize: 'inherit', color: 'inherit' },
//     '& b': { fontWeight: theme.bold },
//   },

//   light: { fontWeight: `${theme.light} !important` },
//   regular: { fontWeight: `${theme.regular} !important` },
//   semibold: { fontWeight: `${theme.semibold} !important` },
//   bold: { fontWeight: `${theme.bold} !important` },
//   accent: { color: `${theme.accent} !important` },
// })

// function Text(props) {
//   const {
//     children, classes, style, className, id,
//     type, size, light, bold, center, inline, regular, semibold, accent,
//     mb, mt, ml, mr, mx, my, m,
//     pb, pt, pl, pr, px, py, p,
//     onClick, nowrap
//   } = props

//   let textSize = ((val) => {
//     switch (val) {
//       case 'h1': return '4rem'
//       case 'h2': return '2.5rem'
//       case 'h3': return '1.5rem'
//       case 'h4': return '1.25rem'
//       case 'h5': return '1rem'
//       default: return '1rem'
//     }
//   })(type)
//   if (size) textSize = `${size}px`
//   if (inline) textSize = 'inherit'

//   let propStyles = {
//     marginLeft: ml || mx || m || 0,
//     marginRight: mr || mx || m || 0,
//     marginTop: mt || my || m || 0,
//     marginBottom: mb || my || m || 0,

//     paddingLeft: pl || px || p || 0,
//     paddingRight: pr || px || p || 0,
//     paddingTop: pt || py || p || 0,
//     paddingBottom: pb || py || p || 0,

//     display: inline && 'inline',
//     fontWeight: inline && 'inherit',
//     textAlign: center && 'center',
//     fontSize: textSize,
//     whiteSpace: nowrap && 'nowrap',
//     textOverflow: nowrap && 'ellipsis',
//   }
//   if (inline) propStyles = { ...propStyles, color: 'inherit', transition: 'initial' }

//   let classNameList = `
//     ${classes.text}
//     ${bold && classes.bold}
//     ${light && classes.light}
//     ${regular && classes.regular}
//     ${semibold && classes.semibold} 
//     ${accent && classes.accent} 
//     ${className}
//   `

//   return (
//     <p onClick={onClick}
//       id={id}
//       className={classNameList}
//       style={{ ...propStyles, ...style }}
//     >
//       {children}
//     </p>
//   )
// }

// export default withStyles(localStyles)(Text)