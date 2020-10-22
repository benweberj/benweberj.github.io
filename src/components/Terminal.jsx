import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'

// import Img from './Img'
import Text from './Text'

const termDim = 35

const Container = styled.div(props => ({
  // transition: 'all .2s ease',
  position: 'fixed',
  // display: 'inline-block',
  
  width: props.closed ? termDim : 'auto',
  maxWidth: 900,
  // minWidth: props.closed ? termDim : 'auto',
  // maxWidth: props.closed ? termDim : 'auto',

  height: termDim,
  minHeight: termDim,
  maxHeight: termDim,
  top: 0,
  left: 0,
  // border: '1px dashed gray', 
}))

const _Terminal = styled.pre(props => ({
  // border: `1px solid ${props.theme.complement}`,
  backdropFilter: 'blur(3px)',
  // padding: !props.closed && 10,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: props.closed ? 'column' : 'row',
  // alignItems: props.closed ? 'center' : 'flex-start',
  // justifyContent: 'center',
  transition: 'none !important',
  
  background: `${props.theme.darkColor}aa`,
  color: props.theme.complement,
  fontSize: 13,
  fontFamily: 'Fira Code, sans-serif',
  // fontWeight: props.closed ? props.theme.bold : props.theme.light,
  fontWeight: props.theme.light,
  // borderRadius: props.closed && 999,
  cursor: 'pointer',
}))

const caretWidth = 2
const pos = 'bottom'

// align-items: center;
// flexDirection: props.closed ? 'column' : 'row',
// border: 1px dashed purple;
const Prompt = styled.pre`
  display: flex;
  align-items: ${props => !props.closed && 'center'};
  
  font-weight: 100;
  transition: all 1s ease;
  width: auto;

  @keyframes blink {
    0% {
      border-${pos}: ${caretWidth}px solid transparent;
    }
    50% {
      border-${pos}: ${caretWidth}px solid white;
    }
    100% {
      border-${pos}: ${caretWidth}px solid transparent;
    }
  }

  & #cmd-prompt {
    width: 100%;
    caret-color: transparent;
    // border: none !important;
    transition: all .5s ease;
    color: ${props => props.theme.complement};
    color: transparent:
    outline: none !important;
    font-family: 'Fira Code', monospace;
    background: none;
    position: relative;
    // border: 1px solid red;
    min-width: 300px;
    padding-right: 15px;
    transform: translateY(2px);
    &:focus {
      outline: none !important;
      border: none !important;
    }
    &:after {
      position: absolute;
      top: ${pos === 'bottom' ? '98%' : '0px'};
      left: 0px;
      content: "";
      transform: translateX(${props => (props.cmdLength * 8) + 2}px);
      height: ${props => `${pos === 'bottom' ? `${caretWidth}px` : '100%'}`};
      animation: ${props => (!props.cmdLength || props.cmdLength === 0) && 'blink 1s ease infinite'};
      border-bottom: ${props => props.cmdLength > 0 && `${caretWidth}px solid white`};
      min-width: ${props => `${pos === 'bottom' ? 8 : caretWidth}px`};
      width: ${props => `${pos === 'bottom' ? 8 : caretWidth}px`};
    }
  }
  `



// const CloseBtn = styled.button`
//   width: 14px;
//   height: 14px;
//   background: ${props => props.theme.complement};
//   color: ${props => props.theme.base};
//   font-weight: ${props => props.theme.bold};
//   font-size: 10px;
//   border-radius: 100px;
//   border: none;
//   outline: 0;
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   top: 3px;
//   right: 3px;
// `
// transform: `translateY(${!closed && !cmdMode  }px)` }}
// border: 1px solid red;
const Lambda = styled.div`
  transition: all .5s ease;
  min-width: ${termDim}px;
  min-height ${termDim}px;
  width: ${termDim}px;
  height ${termDim}px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`

// background: ${props => props.theme.complement}11;
const Help = styled.div`
  backdrop-filter: blur(3px);
  padding: 10px;
  width: 100%;
  opacity: ${props => props.inNeed ? 1 : 0};
`

// border: '1px solid red',
const Messages = styled.div(props => ({

}))

export default props => {
  // const [hovered, setHovered] = useState(false)
  const [closed, setClosed] = useState(false)
  const [cmdMode, setCmdMode] = useState(false)
  const [userCmd, setUserCmd] = useState('')
  const promptRef = useRef()
  // const [lastText, setLastText] = useState(props.text)
  const { messages } = props

  const commands = [
    {
      cmd: 'p5()',
      desc: 'check out out some of my p5 sketches'
    },
    {
      cmd: 'reveal()',
      desc: 'see what I look like'
    },
    {
      cmd: 'other()',
      desc: 'thing'
    },
  ]
  // console.log('the innerHTML', closed)

  // useEffect(_ => empty && setClosed(true), [])
  // useEffect(_ => messages.length === 0)

  // useEffect(_ => {
  //   setClosed(messages.length === 0)
  // }, [messages])


  // useEffect(_ => {
    // if (messages.length > 0) console.log('fdkjklsdjlkfd', 'im tring to open')
    // if (cmdMode)
  // }, [cmdMode])

  useEffect(_ => {
    console.log('cmdMode is ', cmdMode ? 'on' : 'off')
    if (closed && !cmdMode) {
      console.log('im gonna decide to open', messages.length)
      setClosed(messages.length === 0)
    }

    if (!closed && !cmdMode) {
      setClosed(messages.length === 0)
    }


    // if (promptRef && promptRef.current) {
    //   const c = promptRef.current
    //   promptRef.current.setAttribute('data-orig', c.innerHTML)

    //   promptRef.current.onblur = function() {
    //     if (c.innerHTML != promptRef.current.getAttribute('data-orig')) {
    //       promptRef.current.setAttribute('data-orig', c.innerHTML);
    //     }
    //   }
    // }
  })
    // console.log('the terminal is ', closed ? 'closed' : 'open')
    // console.log('there are ', messages.length, ' messages')
    

  useEffect(_ => {
    promptRef && promptRef.current && promptRef.current.focus()
  })

  const hiddenMessages = cmdMode ? { position: 'absolute', opacity: 0, userSelect: 'none', zIndex: -9999 } : {}
  // const hiddenMessages = cmdMode ? { position: 'absolute', opacity: .1, userSelect: 'none' } : {}

  // SICK IDEA here, make the page pretty minimsal, prolly a single page actually. When someone clicks on the terminal, thats how the navigate
  // when they click, show the λ and blinking cursor, then have hints below about where they can go and what they can do ( CLI-lookin ). Most commands
  // will have an "add to GUI chip", which will permanently add them to the page, (conditionally rendered, then fire a one-time animation when they appear.)
  // Save their choce in localStorage, and have a schema in app state to populate the localStorage and to make conditionally rendering them efficient and easy  
  // console.log(userCmd.l)
  return (
    <Container closed={closed}>
      <_Terminal closed={closed}>

          <Prompt closed={closed} cmdLength={userCmd && userCmd.length}>
            <Lambda onClick={_ => { setClosed(!closed); setCmdMode(!cmdMode) }}>λ</Lambda>
            {cmdMode ?
              // <div onInput={e =>{ setUserCmd(e.target.value); console.log(e)}} onInput={e =>{ setUserCmd(e.target.value); console.log(e)}} id='cmd-input' ref={promptRef} autoFocus contentEditable={true} />
              <ContentEditable id='cmd-prompt' html={userCmd} onChange={e => setUserCmd(e.target.value)} />
            :
              <Messages>
                {messages.map(line => line.comp)}
              </Messages> 
            }
          </Prompt>
  {/* }  */}
          
      
      </_Terminal>

      {/* <Help inNeed={cmdMode}>
        should change it to:  cmdMode && cmdString is empty
        {commands.map((com, i) => {
          const delay = comd => {
            let thing
            setTimeout(_ => {
              thing = comd
            }, i*1000)
            return thing
          }

          return delay(com)
        })}
      </Help> */}

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