import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { debounce } from 'lodash'

import { theme as baseTheme, GlobalStyles } from './styles'

import ThemeToggler from './components/ThemeToggler'
import Nav from './components/Nav'
import Terminal from './components/Terminal'

// import BenWeber from './benWeber'

// Scrollbar.init(document.querySelector('#smooth-scrollin'))

class App extends React.Component {
  state = {
    theme: baseTheme.dark,
    w: window.innerWidth,
    h: window.innerHeight,
    terminal: '',
    writing: false
  }
  /**
   * @param {string} str - the message to be added to the terminal
   * @param {integer} time - the duration in ms of the delay from cmd -> output
   * @param {string} output - the output of the command, displayed after {time} ms
   */
  echo = (str, time, output) => {
    const { terminal } = this.state
    this.setState({ writing: true })
    const newline = terminal.length < 1 ? '' : '<br />'
    str = newline + 'λ ' + str
    let speed = 20 // duration between character add
    for (let i = 0; i <= str.length; i++) {
      setTimeout(_ => {
        // typing out all the letters
        this.setState({ terminal: terminal + str.substring(0, i) })
      }, speed * i)
      i === str.length && setTimeout(_ => {
        this.setState({ terminal: this.state.terminal + '<br />......' })
        // show running dots then print out the output {time} ms later
        setTimeout(_ => {
          this.setState({
            terminal: this.state.terminal + '<br />' + output,
            writing: false
          })
          // gradually wipe the terminal text
          setTimeout(this.fadeTerminal, 1 * 1000)
        }, time)
      }, speed * i)
    }
    // print out the command really fast, then result
  }

  fadeTerminal = _ => {
    console.log('fading')
    const { terminal, writing } = this.state
    if (!writing) {
      for (let i = terminal.length-1; i >= 0; i--) {
        setTimeout(_ => {
          this.setState({ terminal: terminal.substring(0, terminal.length-1-i) })
        }, 20 * i)
        console.log(this.state)
      }
    }
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
    this.echo(`switching mode to ${newMode}`, 1000, `now thats ${newMode}!`)
  }

  render = _ => {
    const { w, h, theme, terminal } = this.state



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
          <Terminal text={terminal} theme={theme} />
          <Nav />
          <ThemeToggler theme={theme} toggleMode={this.toggleMode} style={{ transform: 'translate(-50%, 10px)', position: 'fixed', left: '50%', top: 0 }} />
          {/* <BenWeber theme={theme[mode]} toggleMode={this.toggleMode} w={w} h={h} /> giving theme so it can also be used inline */}
          <h1 style={{ fontSize: 100, color: theme.complement }}>So lets just pretend that we would have a lot of text here</h1>
          <h1 style={{ fontSize: 100, color: theme.complement }}>We're gonna do that so we can see how the headers gonna be lookin</h1>
          <h1 style={{ fontSize: 100, color: theme.complement }}>Will it look well? I have nbo idea bro lets just find ot here in a second</h1>
        </ThemeProvider>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)