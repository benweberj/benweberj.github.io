import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { debounce } from 'lodash'

import { theme, GlobalStyles } from './styles'
import BenWeber from './benWeber'


class App extends React.Component {
  state = {
    mode: 'dark',
    w: window.innerHeight,
    h: window.innerHeight, 
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
    const { mode } = this.state
    this.setState({ mode: mode === 'dark' ? 'light' : 'dark'  })
  }

  render = _ => {
    const { mode, w, h } = this.state

    return (
      // Ok, so now the theme should be accessible everywhere pretty dang easily
      <MuiThemeProvider theme={theme ? theme[mode] : {}}> {/* for MUI localStyles */}
        <ThemeProvider theme={theme ? theme[mode] : {}}> {/* for styled-components */}
          <GlobalStyles /> {/* for all glocal css styles */}
          <BenWeber theme={theme[mode]} toggleMode={this.toggleMode} w={w} h={h} /> {/* giving theme so it can also be used inline */}
        </ThemeProvider>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)