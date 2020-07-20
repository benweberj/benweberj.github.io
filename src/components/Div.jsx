import React from 'react'
import styled from 'styled-components'

const Div = styled.div(props => ({
  transition: 'all .5s ease',

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

  display: (props.flex || !!props.align || !!props.justify || props.col || props.center) && 'flex',
  justifyContent: props.justify ? props.justify : props.center && 'center',
  alignItems: props.align ? props.align : props.center && 'center',
  flexDirection: props.col && 'column',
  flexWrap: props.wrap && 'wrap',

  borderRadius: props.rounded ? props.theme.corners : props.rad ? props.rad : 0,
  width: props.w && props.w,
  height: props.h && props.h,
  background: props.bg && props.bg,
  overflow: props.contain && 'hidden',
  pointerEvents: props.disabled && 'none',
  opacity: props.disabled && .4, 
  
  border: props.debug && '1px solid red',
  '& > *': {
    border: props.debug && '1px dashed pink',
  }
}))

export default Div

//   glass: {
//     border: '1px solid #0000',
//     // boxSizing: 'border-box !important',
//     background: theme.holo,
//     borderRadius: 4,
//     cursor: 'pointer',

//     '&:hover': {
//       border: `1px solid ${theme.accent}`,
//       background: theme.holoFocus,
//     }
//   },
//   inactive: {
//     '&:hover': {
//       border: '1px solid #0000',
//       background: theme.holo,
//     }
//   },
//   debug: {
//     border: '.5px solid #fff',
//     '& > *': {
//       border: '.5px dashed #fff',
//     },
//     '& > * > *': {
//       border: '.5px solid #fff8',
//     },
//     '& > * > * > *': {
//       border: '.5px dashed #fff8',
//     },
//     '& > * > * > * > *': {
//       border: '.5px solid #fff2',
//     },
//   }

//   // card: {
//   //   fontSize: '1.1rem',
//   //   padding: '1rem',
//   //   background: theme.holo,
//   //   color: theme.secondary,
//   //   border: '1px solid #fff0',
//   //   transition: 'all .5s ease !important',
//   //   cursor: 'pointer',
//   //   borderRadius: '.25rem',
//   //   position: 'relative',
//   //   overflow: 'hidden',

//   //   '& img.bg': {
//   //     position: 'absolute',
//   //     width: '100%',
//   //     content: '',
//   //     left: 0,
//   //     opacity: .8,
//   //     top: 0,
//   //     zIndex: -1,
//   //     transition: 'all .5s ease !important',
//   //     transform: 'scale(1.5)',
//   //   },

//     // '& .overlay': {
//     //   position: 'absolute',
//     //   width: '100%',
//     //   content: '',
//     //   left: 0,
//     //   top: 0,
//     //   opacity: 0,
//     //   zIndex: -10,
//     //   padding: '1rem',
//     //   // background: '#d00d',
//     // },

//     // '& p.text': {
//     //   opacity: 0,
//     //   transition: 'all .5s ease !important',
//     // },

//     // '&:hover': {
//     //   border: `1px solid ${theme.accent}`,
//     //   background: theme.holoFocus,

//     //   '& img.bg': {
//     //     opacity: .2,
//     //     transform: 'scale(1.7)',
//     //   },

//       // '& .overlay': {
//       //   zIndex: 10,
//       //   opacity: 1,
//       //   // transform: 'scale(1.1)',
//       // },

//       // '& p.text': {
//       //   opacity: 1
//       // },
//     // },
//   // }
// })

// function Div (props) {
//   const {
//     glass,
//     iflex, flex, align, justify, col, center, wrap,
//     className, onClick, onMouseOver, onMouseOut, onChange, id, style,
//     children, classes,
//     mb, mt, ml, mr, mx, my, m,
//     pb, pt, pl, pr, px, py, p,
//     disabled, inactive,
//     w, h, silent, debug, minW, minH, maxW, maxH
//   } = props

//   let alignment = ((val) => {
//     switch (val) {
//       case 'center': return 'center'
//       case 'end': return 'flex-end'
//       default: return 'flex-start'
//     }
//   })(align)

//   let justification = ((val) => {
//     switch (val) {
//       case 'center': return 'center'
//       case 'end': return 'flex-end'
//       case 'around': return 'space-around'
//       case 'between': return 'space-between'
//       case 'evenly': return 'space-evenly'
//       default: return 'flex-start'
//     }
//   })(justify)

//   if (center) {
//     alignment = 'center'
//     justification = 'center'
//   }

//   const flexStyles = (flex || align || justify || col || center || iflex) ? {
//     display: iflex ? 'inline-flex' : 'flex',
//     flexWrap: wrap && 'wrap',
//     alignItems: alignment,
//     justifyContent: justification,
//     flexDirection: col ? 'column' : 'row',
//   } : {}

//   // Can't find a better way to give glass divs padding, but this works
//   const pad = glass ? 20 : 0

//   const propStyles = {
//     // margins
//     marginLeft: ml || mx || m || 0,
//     marginRight: mr || mx || m || 0,
//     marginTop: mt || my || m || 0,
//     marginBottom: mb || my || m || 0,

//     paddingLeft: pl || px || p || pad,
//     paddingRight: pr || px || p || pad,
//     paddingTop: pt || py || p || pad,
//     paddingBottom: pb || py || p || pad,

//     width: w && w,
//     height: h && h,

//     minWidth: minW && minW,
//     minHeight: minH && minH,
//     maxWidth: maxW && maxW,
//     maxHeight: maxH && maxH,
//   }

//   const disabledStyles = disabled ? {
//     opacity: .3,
//     pointerEvents: 'none',
//   } : {}

//   const silentStyles = silent ? {
//     opacity: .2,
//   } : {}

//   return (
//     <div
//       id={id}
//       onMouseOver={onMouseOver}
//       onMouseOut={onMouseOut}
//       onClick={onClick}
//       onChange={onChange}
//       className={`${classes.div} ${glass && classes.glass} ${inactive && classes.inactive} ${className} ${debug && classes.debug}`}
//       style={{ ...flexStyles, ...propStyles, ...style, ...disabledStyles, ...silentStyles }}
//     >
//       {children}
//     </div>
//   )
// }

// export default withStyles(localStyles)(Div)