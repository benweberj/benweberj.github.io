import React, { useState, useEffect, useRef } from 'react'

import Text from './Text'
import Div from './Div'
import Img from './Img'
import { withStyles } from 'material-ui-core'

const localStyles = theme => ({
  logo: {
    transition: 'all .25s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  }
})

function Omic (props) {
  const [open, setOpen] = useState(false)
  const { theme, w, h, classes } = props

  return (
    <Div minH='100vh' cover bg='radial-gradient(#192b41f5, #0c1015f5), url(https://us.123rf.com/450wm/nicholashan/nicholashan1709/nicholashan170900485/87166578-de-3d-weergave-van-golf-deeltjes-achtergrond-3d-verlichte-digitale-golf-van-gloeiende-deeltjes.jpg?ver=6)'>
      <Div mx='auto' pt={!open ? 'calc(50vh - 8vh)' : '10vh'}>
        <Img mx='auto' block className={classes.logo} circle onClick={_ => setOpen(!open)} src={require('../img/omic.png')} h={open ? '8vh' : '15vh'} style={{ animation: !open && `pulse${theme.mode} 2s ease infinite` }} />
      </Div>
    </Div>
  )
}

export default withStyles(localStyles)(Omic)