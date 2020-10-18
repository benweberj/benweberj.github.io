import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { debounce } from 'lodash'

import { theme as baseTheme, GlobalStyles } from './styles'

import ThemeToggler from './components/ThemeToggler'
import Nav from './components/Nav'
import Terminal from './components/Terminal'
import Line from './components/Line'

// import BenWeber from './benWeber'

// Scrollbar.init(document.querySelector('#smooth-scrollin'))

class App extends React.Component {
  state = {
    theme: baseTheme.dark,
    w: window.innerWidth,
    h: window.innerHeight,
    terminal: '',
    writing: false,
    termMessages: [],
  }

  /**
   * @param {string} str - the message to be added to the terminal
   * @param {integer} time (optional) - if its a status rather than suppl. text, remove after {time}ms
   */
  echo = (str, time=6000) => {
    let x = this.state.termMessages
    x.push({ id: str, comp: <Line nullify={this.nullifyMsg} msg={str} time={time} key={str.substring(2, 6) || str.charAt(0)} /> })
    this.setState({ messages: x })
    console.log(x.length)
  }

  nullifyMsg = msg => {
    const newMessages = this.state.termMessages.filter(tm =>  {
      console.log(tm)
      return tm.id !== msg
    })
    this.setState({ termMessages: newMessages })
  }

  componentDidMount = _ => {
    const debouncedResize = debounce(_ => {
      const w = window.innerWidth
      const h = window.innerHeight
      this.setState({ w, h })
    }, 250)
    window.addEventListener('resize', debouncedResize)
  }


  toggleMode = _ => {
    const { theme: { mode } } = this.state
    let newMode = mode === 'dark' ? 'light' : 'dark'
    this.setState({ mode: newMode, theme: baseTheme[newMode] })
    this.echo(`switching mode to ${newMode}`, 1000)
  }

  render = _ => {
    const { w, h, theme, termMessages } = this.state




    /**
     * OK so just in case you forget, the thing you're gonna be doing with this site is making all 
     * futiristic and code-y. You have the echo function to append to the terminal the commond you're
     * site is doing. Each compnent should get that echo function as a prop. 
     */




    return (
      // Ok, so now the theme should be accessible everywhere pretty dang easily
      <MuiThemeProvider theme={theme}> {/* for MUI localStyles */}
        <ThemeProvider theme={theme}> {/* for styled-components */}
          <GlobalStyles /> {/* for all global css styles */}
          <Terminal messages={termMessages} theme={theme} />
          <Nav echo={this.echo} theme={theme} />
          <ThemeToggler
            theme={theme}
            toggleMode={this.toggleMode}
            style={{ transform: 'translate(-50%, 10px)', position: 'fixed', left: '50%', top: 0 }}
          />
          {/* <BenWeber theme={theme[mode]} toggleMode={this.toggleMode} w={w} h={h} /> giving theme so it can also be used inline */}
          {/* <h1 style={{ fontSize: 100, color: theme.complement }}>So lets just pretend that we would have a lot of text here</h1>
          <h1 style={{ fontSize: 100, color: theme.complement }}>We're gonna do that so we can see how the headers gonna be lookin</h1>
          <h1 style={{ fontSize: 100, color: theme.complement }}>Will it look well? I have nbo idea bro lets just find ot here in a second</h1> */}
        </ThemeProvider>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)