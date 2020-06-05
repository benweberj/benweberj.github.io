import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { theme, GlobalStyles } from './styles'
import BenWeber from './benWeber'

class App extends React.Component {
  state = {
    mode: 'light'
  }

  toggleMode = () => {
    this.state.mode === 'dark' ? this.setState({ mode: 'light' })
      : this.setState({ mode: 'dark' })
  }

  render() {
    return (
      <ThemeProvider theme={theme[this.state.mode]}>
        <GlobalStyles />
        {/* Explicitly passing theme because only styled components have access via ThemeProvider */}
        <BenWeber theme={theme[this.state.mode]} toggleMode={this.toggleMode} />
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)